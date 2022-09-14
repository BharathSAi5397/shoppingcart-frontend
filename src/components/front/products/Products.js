import './products.css'
const Products = ({ productItems,handleAddProduct }) => {
    //console.log(productItems)
    return (
        <div className='products'>
            {
                productItems.map((productItem) => {
                    return (
                        <div className='card' key={productItem.id}>
                            <div>
                                <img className='productimg' src={productItem.image} />
                            </div>
                            <div>
                                <h3 className='productname'>{productItem.name}</h3>
                            </div>
                            <div className='productprice'>${productItem.price}</div>
                            <div>
                                <button className='productaddcart' onClick={()=>handleAddProduct(productItem)}>add-to-cart</button>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}
export default Products;