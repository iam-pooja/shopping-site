import React from 'react';
import { Items } from '../components/shopItems';
import Product from '../components/Product';
import '../styles/Shop.css';

function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <p>Categories</p>
      </div>
      <div className='products'>
        {Items.map((product) => 
        <Product data={product}/>)}
      </div>
    </div>
  )
}

export default Shop
