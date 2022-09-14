import './caRt.css'
const Cart =({cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance})=>
{
    const totalPrice = cartItems.reduce((price,item)=>price+item.quantity *item.price,0);
    return (
        <div className="cartItems">
            <div className="cartItemsHeader"> cartitemslist</div>
            <div className='clearCart'>
                {cartItems.length>=1&&
                <button className='clearCartButton' onClick={handleCartClearance}>clear cart</button>
                }
            </div>
            {cartItems.length==0 &&<div className="cartItemsEmpt">No items in the Cart</div>}
            <div>
                {cartItems.map((item)=>{
                    return(
                        <div key={item.id} className="cartItemsList">
                            <img className='cartItemimage' src={item.image} />
                            <div className="cartitemname">{item.name}</div>
                            <div className="cartitemFunction">
                                <button className="cartitemadd" onClick={()=>handleAddProduct(item)}>+</button>
                                <button className="cartitemremove" onClick={ ()=>handleRemoveProduct(item)}>-</button>
                            </div>
                            <div className="cartitemPrice">{item.quantity}* {item.price}</div>
                            
                        </div>
                    )
                })}
                 <div className="cartTotalPriceName">
                Total price:
                <div className="cartTotalPrice">
                    ${totalPrice}
                </div>
            </div>
            </div>
           
        </div>
        
    )
}
export default Cart