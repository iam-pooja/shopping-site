import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext';

const Product = (props) => {

    const {id, productName, price, productImage} = props.data
    const {addToCart, cartItems} = useContext(shopContext);

    const cartAmount = cartItems[id]

  return (
    <div className='product'>
    <div className='backgroundImage'>
      <img src={`${productImage}`} />
    </div>
    <div className='productName'><b>{productName}</b></div>
    <div className='price'>${price}</div>
    <div className='addToCart'>
      <button onClick={() => addToCart(id)}>
        Add to Cart {cartAmount > 0 && <> ({cartAmount}) </>} 
      </button>
    </div>
    </div>

  )
}

export default Product
