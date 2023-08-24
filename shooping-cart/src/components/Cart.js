import React from 'react'
 const Cart=({cartItems})=> {
    
  return (
    <>
    <div className='cart-item'>
        <h1>Cart Items</h1>        
           {cartItems.map((item)=>(
            <div key={item.name}>
                <img src={item.image} alt={item.name}/>
            </div>
           ))
            
           }
        
    </div>
    </>

  )
}
export default Cart;