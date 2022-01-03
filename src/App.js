import React from 'react'
import   "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home"
  
import {Routes ,Route} from "react-router-dom"
import Navbar from './Navbar'
import Product from './Product'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import ProductDetail from './Container/ProductDetail'
import ProductListi from './Container/ProductListi'

const App = () => {
  return (
    <>
<Navbar />
<Routes>
  <Route path="/" element={<Home/>} ></Route>
  <Route path="/about" element={<About/>} ></Route>
  <Route path="/contact" element={<Contact/>} ></Route>
  <Route path="/product" element={<Product/>} ></Route>
  <Route path="/product/:productID" element={<ProductDetail />}></Route>
  <Route>404 not Found !</Route>
</Routes>
<Footer />
    </>
  )
}

export default App
