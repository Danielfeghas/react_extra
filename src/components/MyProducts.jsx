import { useState, useEffect, useContext } from "react";
import { productContext } from "../contexts/ProductContext";

// const products = [
//     { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
//     { id: 2, name: "Smartphone", price: 699.99, category: "Electronics" },
//     { id: 3, name: "Headphones", price: 149.99, category: "Electronics" },
//     { id: 4, name: "Coffee Maker", price: 49.99, category: "Home Appliances" },
//     { id: 5, name: "Backpack", price: 39.99, category: "Accessories" },
//     { id: 6, name: "Running Shoes", price: 89.99, category: "Footwear" },
//     { id: 7, name: "Water Bottle", price: 19.99, category: "Accessories" },
//     { id: 8, name: "Desk Lamp", price: 29.99, category: "Home Appliances" },
//     { id: 9, name: "Notebook", price: 9.99, category: "Stationery" },
//     { id: 10, name: "Wireless Mouse", price: 24.99, category: "Electronics" }
// ];
  
const MyProducts = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [userToken, setUserToken] = useState("Peter")
    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(false)
    const{fetchProducts, isLoading, products} = useContext(productContext)

    useEffect(()=>{
        fetchProducts()
    },[])

    // useEffect(() => {
    //     // action
    //     fetchProducts()
    // }, [isLoggedIn, userToken]) // dependencies array


    // ACTION
    // const fetchProducts = async () => {
    //     setLoading(true)
    //     try {
    //         const res = await fetch("https://fakestoreapi.com/products")
    //         const data = await res.json()
    //         setProducts(data)
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

        // const toggleAuthState = () => {
        //     // setIsLoggedIn(prev => !prev)
        //     setUserToken(prev => prev + "hssh")
        // }

    return (
        <div>
            <h2>My Products</h2>
            <div className="product-container" >
                {
                    isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        <>
                            {
                                products?.length == 0 ? (
                                   <h1>No result</h1>
                                ) : (
                                    <>
                                        {
                                            products?.map((product, index)=>(
                                                
                                                <a href={`/MyProducts/${product.id}`} key={index} className="product">
                                                    <img src={product.image} alt="" width={200} />
                                                    <h2>{product.title}</h2>
                                                    <p>{product.category}</p>
                                                    <p>{product.price}</p>
                                                </a>
                                                
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

export default MyProducts