import React, {useContext} from 'react';
import { Items } from '../components/shopItems';
import { shopContext } from '../context/shopContext';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();

    const {cartItems,  getTotalCartAmount} = useContext(shopContext);
    const totalAmount = getTotalCartAmount()

  return (
    <div className='cart'>
      <div>
        <h2 className='heading'><b>Your Cart Items</b></h2>
      </div>
      <div className='cartItems'>
        {Items.map((item) => {
          if(cartItems[item.id] > 0){
            return <CartItem data={item} />
          }
        })}
      </div>

      {totalAmount > 0 ?
      <div className='checkout'>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/shop')}>Continue Shopping</button>
        <button onClick={() => navigate('/')}>Home Page</button>
      </div> :
      <h1 className='emptyCart'><b>Your Cart is Empty</b></h1>
      }
    </div>
  )
}

export default Cart
