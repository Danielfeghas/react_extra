import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// STATE MANAGEMENT
// Local state: useState
// global state: context api
// CONTEXT API
// redux, zustand

const signUpSchema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("password is required").min(8, "Password cannot be less than 8 characters"),
    companyName: yup.string(),
    name: yup.string().required("Name is required")
})

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpSchema),
        defaultValues: {
            name: "",
            companyName: "",
            password: "",
            email: ""
        }
    })
    const [submitting, setSubmitting] = useState(false)
    const navigate = useNavigate()


    const onSubmit = async (formData) => {
        setSubmitting(true)
        try {
            const res = await fetch("http://localhost:4000/users", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (data.status === "success") {
                toast.success("Welcome onboard! Redirecting...")
                navigate(`/auth-notifier?email=${encodeURIComponent(formData.email)}`)
            }
            if (data.status === "error") {
                toast.error(data.message)
            }
            console.log(data)
        } catch (error) {
            console.log(error)
            toast.error("Sign up failed")
        } finally {
            setSubmitting(false)
        }
    }


    return (
        <div className="signup-container">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="joe@dev.com" id="email" {...register("email")} />
                    {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="name">Full name</label>
                    <input type="text" placeholder="Elon musk" id="name" {...register("name")} />
                    {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="companyName">Company Name (optional)</label>
                    <input type="text" placeholder="Elon Enterprise" id="companyName" {...register("companyName")} />
                    {errors.companyName && <p style={{ color: "red", fontSize: "12px" }}>{errors.companyName.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*******" id="password" {...register("password")} />
                    {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</p>}
                </div>

                <button disabled={submitting}>{submitting ? "Authenticating..." : "Create Account"}</button>
            </form>
            <p>Have an account already? <a href="./signin">Login</a></p>
        </div>
    )
}

export default Form
















// import { useState } from "react"
// import { useNavigate } from "react-router-dom";

// const Form = () => {
//     const [formData, setFormData]= useState({
//         email: "",
//         password: "",
//         name: "",
//         companyName: ""
//     })

//     console.log(formData);
//     const[submitting, setSubmitting] = useState()
//     const navigate = useNavigate()

//     const handleInput = (e)=>{
//         const {name, value }= e.target
//         setFormData(prev => ({...prev, [name]: value}))
//     }

//     const handleSubmit = async(e)=>{
//         e.preventDefault()
//         setSubmitting(true)
//         try {
//             const res = await fetch("http://localhost:4001/users",{
//                 method: "POST",
//                 body: JSON.stringify(formData),
//                 headers: {"Content-Type": "application/json"}
//             })
//             const data = await res.json()
//             console.log(data);
//             if (data.status === "success") {
//                 //window.location.href = "./signin"
//                 alert("Welcome onboard! Ridirecting...")
//                 navigate("/Signin")

                
//             }
            
//         } catch (error) {
//             console.log(error);
            
//         }finally{
//             setSubmitting(false)
//         }
//     }
    



//     return(
//         <div className="signup-container">
//             <h2>Sign up</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input type="email" placeholder="joe@dev.com" name="email" onChange={handleInput} />
//                 </div>
//                 <div>
//                     <label htmlFor="name">Full name</label>
//                     <input type="text" placeholder="Elon musk" id="name" name="name" onChange={handleInput}/>
//                 </div>
//                 <div>
//                     <label htmlFor="companyName">Company name</label>
//                     <input type="text" placeholder="Elon Enterprise" id="companyName" name="companyName" onChange={handleInput}/>
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" placeholder="*************" name="password" onChange={handleInput}/>
//                 </div>

//                 <button disabled={submitting}>{submitting? "Authenticating...": "Create Acccount"}</button>
//             </form>
//             <p>Already have an Account? <a href="/Signin">Login</a></p>
//         </div>
//     )
// }

// export default Form