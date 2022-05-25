import React, {useState} from 'react'
import Header from './Instaclone'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Form = () => {
  const [user,setUser]=useState({
    userAuthor:'',
    userLocation:'',
    userDesc:''
  })
  const navigate=useNavigate();

  const changeOnClick= async(e)=>{
    e.preventDefault();
    const formData=new FormData();

    const file=e.target.elements.userFile.files[0]

    formData.append('image', file);
    formData.append('author', user.userAuthor);
    formData.append('location', user.userLocation);
    formData.append('description', user.userDesc);
    formData.append('date', new Date().toLocaleDateString());

    console.log(formData.get('image'));
    console.log(formData.get('author'));
    console.log(formData.get('location'));
    console.log(formData.get('description'));

    try {
      console.log('this is formData: ',formData);
      const response = await axios.post(
        'https://myinstaclone-be.herokuapp.com/api/v1/posts',
        formData, console.log(formData)
      
      );
      navigate('/posts');
      console.log('this is response: ',response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <><Header/>
    <form onSubmit={changeOnClick} className='form-container' encType='multipart/form-data'>
    <div className='form-group'>
    <input type="file" 
              name="image" id="userFile" 
              className='image-file'
              placeholder='author'
              accept=".jpg, .jpeg, .png"   />
    </div>
      <div className='form-group'>
          <label htmlFor="author"></label>
          <input type="text" 
              name="userAuthor" id="userAuthor"
              value={user.userAuthor} 
              className='text' 
              placeholder='author'
              onChange={(e) => setUser({ ...user, userAuthor: e.target.value })}
              required
              />

          <label htmlFor="location"></label>
          <input
                type='text'
                placeholder='Location'
                className='text'
                name='userLocation'
                id='userLocation'
                value={user.userLocation}
                onChange={(e) =>
                  setUser({ ...user, userLocation: e.target.value })
                }
                required
              />
      </div>
      <div className='form-group'>
          <label htmlFor="description"></label>
          <div className='desc'>
              <input
                type='text'
                placeholder='Desciption'
                name='userDesc'
                id='userDesc'
                value={user.userDesc}
                onChange={(e) => setUser({ ...user, userDesc: e.target.value })}
                required
              />
      </div>
      </div>
      <button type='submit' className='btn' >
          post
      </button>
    </form>
    </>
  )
}

export default Form