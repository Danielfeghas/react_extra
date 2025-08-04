import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loadingUsers, setLoadingUsers] = useState(false)
    const [searchQuery, setSearchQuery] = useState("pet")

    useEffect(()=>{
        fetchUsers()
    },[])

    // fetch users
    const fetchUsers = async () => {
        setLoadingUsers(true)
        try {
            const res = await fetch(`https://dummyjson.com/users/search?q=${searchQuery}`)
            const data = await res.json()
            console.log(data.users)
        } catch (error) {
            console.log(error)
        } finally{
            setLoadingUsers(false)
        }
    }

  return (
    <div>
        {/* renders users */}
        <input type="search" />
    </div>
  )
}

export default Users