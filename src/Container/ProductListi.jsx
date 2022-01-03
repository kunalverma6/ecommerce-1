import React from 'react'
import {useSelector} from "react-redux"
const ProductListi = () => {
const products = useSelector(state => state)
console.log(products)
    return (
        <>
product
        </>
    )
}

export default ProductListi
