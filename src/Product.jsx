import React,{useEffect} from 'react'
import {useSelector} from "react-redux"
import ProductComponenet from "./Container/ProductComponenet"
import axios from "axios"
import { useDispatch } from 'react-redux'
import { setProduct } from './Redux/Action/ProductAction'

const Product = () => {

    
    const products = useSelector((state) => state)
    
const dispatch = useDispatch()

const fetchProduct= async ()=>{
     const response= await 
     axios.get("https://fakestoreapi.com/products")
     .catch((err)=>{
         console.log("err",err)

     });
     dispatch(setProduct(response.data))
 };

useEffect(() => {
    fetchProduct();
        
    
}, []);

console.log("products:",products)


return (
        <>
 <ProductComponenet />
        </>
    )
}

export default Product
