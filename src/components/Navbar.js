import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import '../styles/Navbar.css';
import {MdReorder} from 'react-icons/md';


const Navbar = () => {

const [toggle, setToggle] = useState(false);

const toggleNavbar = () => {
  setToggle(!toggle);
}

  return (
    <div className='navbar'>
      <div className='leftSide' id={toggle ? 'open' : 'close'}>
        <h1 className='title'>Girlish</h1>
        <div className='hiddenLinks'>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>
            < FaShoppingCart />
          </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>
         < FaShoppingCart />
        </Link>
        <button onClick={toggleNavbar}>
          <MdReorder size={27}/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
