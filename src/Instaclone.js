import React from 'react'
import image from './assets/images/insta-circle-image.jpeg'
import {FaCamera} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Instaclone = () => {
  return (<>
  <header className='header'>
      <div className="header-container">
      <img src={image} alt="cicle-pic" className='circle-pic'/>
      <p>Instaclone</p>
      <Link to='/form'><FaCamera icon="fa-solid fa-camera-retro fa-2x" className='icon-class'/></Link>
      </div>
  </header>
    </>
  )
}

export default Instaclone