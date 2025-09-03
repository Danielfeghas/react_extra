import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    // get the token
    const [token, setToken] = useState(localStorage.getItem("token") || "")
    const verifyToken = async () => {
        try {
            const res = await fetch(`${baseUrl}/users/verify-token`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            const data = await res.json()
            console.log(data)
            if (data.user) {
                return data.user
            } else {
                return null
            }

        } catch (error) {
            console.log(error)
            return null
        }
    }
    const user = verifyToken()
    const baseUrl = import.meta.env.VITE_BASE_URL

    const navigate = useNavigate();

    useEffect(() => {
        if (!token || !user) {
            navigate("/signin", { replace: true });
        }
    }, [token, navigate]);


    return (
        <Outlet />
    )

}

export default ProtectedRoutes





  // useEffect(()=>{
  //   if(token){
  //     verifyToken()
  //   }
  // },[])

  //find the user from backend

 

    // const isAuthenticated = false;
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     if (!isAuthenticated) {
    //         console.log("Not Authenticated, redirecting...");
    //         navigate("/Signin",{replace:true})
    //     }
    // },[isAuthenticated, navigate]);
