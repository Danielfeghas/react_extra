import React, { createContext, useState } from 'react'

export const productContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts]= useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fakeStoreUrl = import.meta.env.VITE_FAKESTORE_BASE_URL


    //FETCH PRODUCTS
    const fetchProducts = async () => {
        setIsLoading(true)
        try {
            const res = await fetch (`${fakeStoreUrl}/products`)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsLoading(false)
        }
    }

    const value = {
        products,
        isLoading,
        fetchProducts
    }
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  )
}

export default ProductProvider