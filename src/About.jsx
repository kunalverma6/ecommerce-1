import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "./imges/img1.png"
const About = () => {
    return (
        <div>
           <h2 style={{margin:"50px"}} >We are the destination E-commerce we ment to serve you</h2>
           <h4 style={{margin:"20px"}}>we setup our first branch at delhi to make things easy for you on 2000
               we are here to serve you built stuff for you to make your work easy and convenvenient
                we are DESTINATION Ecommerce .
           </h4>
           <h2>HEADQUATER: DELHI <br></br>
               MAP - ADDRESS: 4545789756988;<br></br>
               CEO: KUNAL VERMA<br></br>

           </h2>
           <div>CLICK ON THE BUTTON BELOW TO GO TO THE HOME PAGE
           <Link type='btn btn-primary' to="/">
            HOME
           </Link>
           </div>
           <div>
                         <img id='img1id' src={img1} alt="the tag"  />
                     </div>
        </div>
    )
}

export default About
