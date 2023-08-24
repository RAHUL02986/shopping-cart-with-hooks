import React from 'react'
import Header from './Header'
import data from './data'
import Router from './Routes'
import { useState } from 'react'
const App=()=> {

    const {productItems} = data;
    const [cartItems, setCartItems]=useState([]);
    const handleAddProduct=(product)=>{
      const productExist = cartItems.find((item)=>item.id ===product.id);
      if(productExist){
           setCartItems(cartItems.map((item)=>item.id === product.id ? 
           {...productExist,quantity:productExist.quantity +1

           }:item)
           
           );
      }
        else{
          setCartItems([...cartItems,{...product, quantity:1}]);
        }
      
    }

      

    
    return (
    <>
        <Header/>
      <Router productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}  />
    </>
  )
}
export default App;