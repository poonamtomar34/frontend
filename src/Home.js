import React from 'react';
import { Link } from 'react-router-dom';
import image from './assets/images/insta-homepage-image.jpeg';


const Home = () => {
  return (<>
    <div className='home-container'>
      <img src={image} alt="home-pic" className='homeImage'/>
      <div className="home-text"> <p> 10x academy 04</p>
      <Link to='/posts' className='homeBtn'> Back home</Link>
      </div>
    </div>
    </>
  )
}

export default Home