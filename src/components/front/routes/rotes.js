import {Route,Routes} from 'react-router-dom'
import Products from '../products/Products';
import SignUp from '../signup/SignUp';
import Cart from '../cart/cart';
const Rotes =({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance})=>{
    return(
        <div>
            <Routes>
            <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart  cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>} />
            </Routes>
           
        </div>
    )
}
export default Rotes;