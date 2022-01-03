import React,{useState} from 'react'

const Contact = () => {
 const [Data, setData] = useState({
     username:"",
     phone:"",
     email:"",
     password:""
 })

  const HChange=(e)=>{
     const name=e.target.name;
     const value= e.target.value;
      console.log(name,value)

      setData({...Data,[name] :value})
  }


const HSubmit=(e)=>{
   e.preventDefault();
  alert(`${Data.username} this is your username  ${Data.phone} this is your phone${Data.email} this is your email ${Data.password} this is your password`)
}


    return (
        <>
<div className="row justify-contect-center">
<h2 style={{color:"DarkGoldenRod"}}><strong 
            style={{fontStyle:"oblique" , color:"red" ,margin:"200px",marginBottom:"200px"}}>FORM PAGE</strong><br></br>
           <i style={{margin:"50px"}}>   Please fill these informations given below to make u 
           catch...we love to serve you </i> </h2>
    <div className="col-md-8 justify-content-center"
     style={{margin:"200px",marginLeft:"200px",backgroundColor:"darkgray"}}>
    <form onSubmit={HSubmit}>
  <div className="mb-3" style={{marginTop:"50px"}}>

    <label for="exampleInputEmail1"
     className="form-label">username</label>
    <input type="text" name='username' value={Data.username}
    onChange={HChange}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">mentioned your name here</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">phone</label>
    <input type="phone" 
    onChange={HChange} name='phone' value={Data.phone} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">mentioned your phone here</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"
    onChange={HChange} name='email' value={Data.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" 
    onChange={HChange} name='password' value={Data.password} className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button style={{marginBottom:"50px"}} type="submit" className="btn btn-primary">Submit</button>

</form>

<div>
  
</div>
    </div>
</div>
        </>
    )
}

export default Contact
