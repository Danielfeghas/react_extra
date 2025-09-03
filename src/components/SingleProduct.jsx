import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { withPermission } from "./AuthChecker"
import {toast} from "sonner"
// import { singleProductContext } from "../contexts/SingleProductContext"


const SingleProduct = () => {
    // const { fetchSingleProduct, isLoading, singleProduct } = useContext(singleProductContext)

    // useEffect(() => {
    //     fetchSingleProduct()
    // }, [])

    const { id } = useParams()
    const [product, setProduct]= useState()
    useEffect(()=>{
        getSingleProducts()
    },[])


    const getSingleProducts = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            console.log(data);
            setProduct(data)

        } catch (error) {
            console.log(error);

        }
    }

    const addToCart = withPermission(() => {
        console.log("Added to cart: ", product)
        toast.success("Product has been added to cart")
    })

    return (
        <div className="singleProduct">
            <img src={product?.image} alt="" width={250} />
            <p>${product?.price}</p>
            <h4>{product?.title}</h4>
            <p>{product?.description}</p>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default SingleProduct