import React from 'react'
import { useSelector } from 'react-redux'


const ProductComponenet = () => {


const products = useSelector((state) => state.allProducts.products)

const renderList = products.map((product)=>
{
    const {id,title,price,category,image}=product;
    return(
       
      <div className="four wide column" key={id}>
        
          <div className="ui link card">
              <div className="card">
                  <div className="image">
  <img src={image} className="card-img-top" alt={title} />
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{category}</p>
    
    <div className="price">{price}</div>
  </div>
  </div>
  </div>

  </div>
    )
})

    return (
     <div>{renderList}</div> 
    );
}

export default ProductComponenet
