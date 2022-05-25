import React, {useEffect, useState} from 'react'
import {FaEllipsisH, FaHeart,FaPaperPlane} from 'react-icons/fa';
import Header from './Instaclone'
//import ImageArray from './assets/images/data'
//const imageAddress='https://images.pexels.com/photos/11582120/pexels-photo-11582120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const url='https://myinstaclone-be.herokuapp.com/api/v1/posts'
const Instaposts = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    
    const response = await fetch(url);
    const user = await response.json();
    //console.log(users)
    setUsers(user.posts);
    //console.log((user.posts));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (<>
    <Header/>
    <main>
      <div className="main-container">
      {users.map((user)=>{
        return <InstaImages key={user._id} user={user}>
        </InstaImages>
      })}
      </div>
    </main>
    </>
  )
}

const InstaImages=(props)=>{
  const { author, location, image,createdAt,description}=props.user
  return (
    <div className='main-inner-container'>
      <div className="name-section">
                <h3>{author}</h3>
                <p>{location}</p>
                <FaEllipsisH icon="fa-solid fa-ellipsis" />
      </div>
      <div className="image-section">
                <img src={"https://myinstaclone-be.herokuapp.com/"+image} alt="poonam" />
      </div>
      <div className="caption-section">
            <FaHeart icon="fa-solid fa-heart"/>
            
            <FaPaperPlane icon="fa-solid fa-paper-plane" style={{"marginLeft":'3%'}}/>
            <p>64 likes</p>
            <p className='date'>{(new Date(createdAt)).toLocaleDateString()}</p>
            <h4>{description}</h4>
      </div>
    </div>
  )
}

export default Instaposts