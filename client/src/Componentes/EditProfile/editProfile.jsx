import { React, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../actions/userActions';

const EditProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [username, setUsername] = useState(user.username);
    const [imageId, setImageId] = useState(user.image_id);
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    }
  
    const handleImageIdChange = (e) => {
      setImageId(e.target.value);
    }
  
    const handleSave = () => {
      const updatedUser = {
        ...user,
        username,
        image_id: imageId
      };
      dispatch(updateUserData(updatedUser));
    }
  
    return (
      <div>
        <h2>Edit Profile</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Image ID:</label>
          <input type="text" value={imageId} onChange={handleImageIdChange} />
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }
  
  export default EditProfile;
  