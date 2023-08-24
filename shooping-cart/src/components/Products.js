import React from 'react'

export default function Products({handleAddProduct, productItems}) {
  console.log(productItems)
  return (
    <div className='grid'>
{
    productItems.map((item)=>(
      <div className='card'>
        <div >
            <img className='img' src={item.image} alt={item.name}/>

        </div>
       <div className='product-name'>
         <h2>Name :{item.name}</h2>
       </div>
            <div className='product-price'>
             <h3>Price: ${item.price}</h3>               
            </div>

        <div>
            <button className='product-cart' onClick={()=>handleAddProduct(productItems)}>Add Cart</button>
        </div>

      </div>  
    ))
}
      
    </div>
  )
}
