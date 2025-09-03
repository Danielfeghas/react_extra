import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import {toast} from "sonner"

//yup = create rules and regulation for a form , it iscalled a schemma
// react-hook-form

//@hookform/resolver ==> it is how we connnect yup and react-hook-form together

// sonner == use to display alert messages

const productFormSchema = yup.object({
    name: yup.string().required("Product name is required"),
    // email: yup.string().email()
    price: yup.string().required("Price is required")
})

const AddProductForm = ()=>{
    const {handleSubmit, register, formState: {errors}} =useForm({
        resolver: yupResolver(productFormSchema),
        defaultValues:{
            name: "",
            price: "",
            category: "",
        }
    })

    const [submitting, setSubmitting] = useState(false)



    const onSubmit = async (data) => {
        toast.success("Product added successfully")
        console.log(data); 
    }

    return (
        <div className="signup-container">
            <h1>Add new product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" placeholder="Nike shoe" id="name" {...register("name")}/>
                    {errors.name && <p style= {{color:"red", fontSize:"10px"}}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" placeholder="90000" id="price" {...register("price")}/>
                    {errors.price && <p style= {{color:"red", fontSize:"10px"}}>{errors.price.message}</p>}
                </div>

                <button disabled={submitting}>{submitting ? "Authenticating..." : "Create Account"}</button>
            </form>
        </div>
    )
}

export default AddProductForm