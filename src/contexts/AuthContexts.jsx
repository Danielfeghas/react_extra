import { createContext, useState } from "react"
import {toast} from "sonner"
export const authContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "James",
        email: "james@dev.com",
        age: 50,
        address: "Nigeria"

    })

    const [verificationData, setVerificationData]= useState({status: ""})
    const [verifyingToken, setVerifyingToken] = useState(false)
    const [openLoginModal, setOpenLoginModal] = useState(false)
    const [pendingAction, setPendingAction]= useState(null)
    const [submitting, setSubmitting] = useState(false)

    const baseUrl = import.meta.env.VITE_BASE_URL

    const verifyToken = async (token) => {
        setVerifyingToken(true)
        try {
            const res = await fetch(`${baseUrl}/users/verify-account/${token}`,{
                method: "POST"
            })
            const data = await res.json()
            setVerificationData(data)
        } catch (error) {
            console.log(error);
            
        }finally{
            setVerifyingToken(false)
        }
    }

    const login = async (formData) => {
        setSubmitting(true)
        try {
            setTimeout(() => {
                if (pendingAction) {
                    pendingAction()
                }
                setOpenLoginModal(false)
                setSubmitting(false)
            }, 1000 * 3);

            // const res = await fetch("http://localhost:4000/users/login", {
            //     method: "POST",
            //     body: JSON.stringify(formData),
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // })
            // const data = await res.json()
            // if (data.status === "success") {
            //     toast.success("Welcome back")
            //     localStorage.setItem("token", data.token)
            // }
            // console.log(data)
        } catch (error) {
            console.log(error);
            
        }
    }

    const value = {
        verifyToken,
        setPendingAction,
        setOpenLoginModal,
        login,
        pendingAction,
        submitting,
        openLoginModal,
        verifyingToken,
        verificationData
    }

    
    // const signup  = () => {
    //     alert("sign up!")
    // }
    
    // const value = {
    //     user,
    //     signup
    // }
    
    return(
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider