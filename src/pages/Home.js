import React from 'react'
import {Link} from 'react-router-dom';
import HomeImage from '../images/homeImage.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${HomeImage})`}}>
      <div className='headerContainer'>
        <p>Find yourself here!</p>
        <Link to='/shop'>
        <button>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
