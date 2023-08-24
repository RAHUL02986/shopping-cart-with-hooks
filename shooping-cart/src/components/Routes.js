import React from "react";
import Products from "./Products";
import Cart from "./Cart";
import { Route ,Routes} from "react-router-dom"

const Router = ({productItems, cartItems, handleAddProduct})=>{
    console.log(cartItems)
    return(
        <div>
            <Routes>
                <Route path="/"exect element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
                <Route path="/cart" element={ <Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/>}/>
                

            </Routes>

        </div>

    )
}
export default Router;