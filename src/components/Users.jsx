import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loadingUsers, setLoadingUsers] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        fetchUsers()
    }, [searchQuery])

    // fetch users
    const fetchUsers = async () => {
        setLoadingUsers(true)
        try {
            const res = await fetch(`https://dummyjson.com/users/search?q=${searchQuery}`)
            const data = await res.json()
            setUsers(data.users)
            console.log(data.users)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingUsers(false)
        }
    }
    const user = users


    return (
        <div>
            {/* renders users */}
            <input style={{padding:"0.5rem", width:"500px"}} type="search" value={searchQuery}
            placeholder='Search Characters'
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div>

               {
                loadingUsers? (
                    <h1>Loading...</h1>
                ): (
                    <>
                         {user.length == 0 ? (
                    <h1>User not found</h1>
                ) : (
                    <>
                        {
                            user.map((ele,index) => (
                                <div key={index} style={{borderBottom: "1px solid"}}>
                                    <p>
                                      <b>First Name: </b> {ele.firstName} 
                                    </p>
                                    <p>
                                       <b>Last Name:</b> {ele.lastName}     
                                    </p>
                                    <p>
                                       <b>Email Address:</b> {ele.email}     
                                    </p>
                                    <p>
                                      <b>Gender: </b> {ele.gender}     
                                    </p>
                                    <p>
                                     <b> Phone No:</b>  {ele.phone}     
                                    </p>
                                    <p>
                                     <b> University:</b>  {ele.university}     
                                    </p>
                                </div>
                            ))
                        }
                    </>
                )

                }
                    </>
                )
               }
            </div>
        </div>
    )
}

export default Users