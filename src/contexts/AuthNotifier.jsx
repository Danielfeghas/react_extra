
const AuthNotifier = () => {
    const params = new URLSearchParams(window.location.search)
    const email = params.get("email")

    const handleOpenGmail = () => {
        window.open("https://mail.google.com", "_blank")
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "4rem 0 7rem"
        }}>
            <h1>Check You Mail</h1>
            <p>A verification link has been sent to {email}</p>
            <button onClick={handleOpenGmail}>Take me to gmail</button>
        </div>
    )
}

export default AuthNotifier



























// import React, { createContext, useState } from 'react'
// export const authContext = createContext()

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState({

//     })
//     const [verificationData, setVerificationData] = useState({
//         status: ""
//     })
//     const [verifyingToken, setVerifyingToken] = useState(false)

//     const baseUrl = import.meta.env.VITE_BASE_URL

//     const verifyToken = async (token) => {
//         setVerificationData(true)
//         try {
//             const res = await fetch (`${baseURL}/users/verify-account/${token}`,{
//                 method: "POST"
//             })
//             const data = await res.json()
//             setVerificationData(data)
//         } catch (error) {
//             console.log(error);
            
//         }finally{
//             setVerifyingToken(false)
//         }
//     }
//     const value = {
//         verifyToken,
//         verifyingToken,
//         verificationData
//     }

//   return (
//     <authContext.Provider value={value}>{children}</authContext.Provider>
//   )
    
// }

// export default AuthProvider