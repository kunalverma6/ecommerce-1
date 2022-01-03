import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "./imges/img1.png"
const Home = () => {
    return (
        <div>
            <div className='row'>
            <div className='row' >
                     <div className='col-md-12'>
                        <Link to="/product"> <img id='img1id' src={img1} alt="the tag"   /></Link>
                     </div>
                     </div>
             <div className="row">
                 <div className="col-md-10" style={{marginTop:"60px",marginLeft:"50px"}}>
                     <p><h3 style={{margin:"20px"}} >we are the e-commerce please check all these iteams given below to buy products
                         we love to serve you and make your life with our products
                      </h3>
                      <h4>To check our products please click on the button given below
                          <Link className='btn btn-success' style={{float:"right"}} 
                          to="/roduct">PRODUCT</Link>
                      </h4>

                     </p>
                    

                 </div>
           
             </div>
        </div>
        </div>

    )
}

export default Home
