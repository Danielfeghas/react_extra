import React, { createContext } from 'react'
import { useState } from 'react'
// import { useParams } from "react-router-dom"

export const singleProductContext = createContext()

const SingleProductProvider = ({children}) => {
    const [singleProduct, setSingleProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fakestoreapi = import.meta.env.VITE_FAKESTORE_BASE_URL

    
    //FETCH SINGLE PRODUCTS
    
    const fetchSingleProduct = async () => {
        const {id} = useParams()
        setIsLoading(true)
        try {
            const res = await fetch (`${fakestoreapi}/products/${id}`)
            const data = await res.json()
            setSingleProduct(data)

        } catch (error) {
           console.log(error);
            
        }finally{
            setIsLoading(false)
        }
    }

    const value = {
        singleProduct,
        isLoading,
        fetchSingleProduct
    }
  return (
    <singleProductContext.Provider value= {value}>{children}</singleProductContext.Provider>
  )
}

export default SingleProductProvider