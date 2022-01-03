import React,{useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {selectedProduct,removeSelectedProduct} from "../Redux/Action/ProductAction"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProductDetail = () => {
    const {id,image,title,category,price, description}=product;
    const product = useSelector(state => state.product)
    const {productID}=useParams();
    const dispatch = useDispatch();
    console.log(product)
    
    const fetchProductDetail= async()=>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productID}`)
        .catch((err)=>{
            console.log("err",err)
        });
dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if(productID && productID !== "")fetchProductDetail();
        return()=>{
            dispatch(removeSelectedProduct());
        }
        }
    , [productID])
    
    return (
        <div>
      {Object.keys(product)}.length === 0 ? (<div>...Loading</div>
    ):(
           
      <div className="four wide column" key={id}>
      <Link to={`/product/${id}`}>
       <div className="ui link card">
           <div className="card">
               <div className="image">
<img src={image} className="card-img-top" alt={title} />
</div>
<div class="card-body">
 <h5 className="card-title">{ title}</h5>
 <p className="card-text">{category}</p>
 
 <div className="price">{price}</div>
</div>
</div>
</div>
</Link>
</div>
</div>    )}


export default ProductDetail
