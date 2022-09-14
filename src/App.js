import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Data from "./components/back/Data";
import Header from "./components/front/header/header";
import Rotes from "./components/front/routes/rotes";
const App = () => {
  const { productItems } = Data;
  const [cartItems,setCartItems] =useState([]);
  const handleAddProduct =(product)=>
  {
    const productExist=cartItems.find((item)=>item.id==product.id)
    if(productExist)
    {
      setCartItems(
        cartItems.map((item)=>
        item.id==product.id?{...productExist,quantity:productExist.quantity+1}:item
        )
      )
    }
    else{
      setCartItems([...cartItems,{...product,quantity:1}])
    }
  }
  const handleRemoveProduct=(product)=>
  {
    const productExist=cartItems.find((item)=>item.id==product.id);
    if(productExist.quantity==1)
    {
      setCartItems(cartItems.filter((item)=>item.id!=product.id));
    }
    else{
      setCartItems(
        cartItems.map((item)=>
        
          item.id==product.id ? {...productExist,quantity:productExist.quantity-1}
          :item
        )
      )
    }
  }
  const handleCartClearance=()=>
  {
    setCartItems([]);
  }
  //console.log(productItems,Data)
  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Rotes productItems={productItems} cartItems={cartItems} handleCartClearance={handleCartClearance} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </BrowserRouter>

    </div>

  )
}
export default App;