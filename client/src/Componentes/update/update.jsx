import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { searchArtist } from '../../Actions/actions';


function Update({ currentUsername, currentPhoto, onUpdate }) {
  const [newUsername, setNewUsername] = useState('');
  const [newPhoto, setNewPhoto] = useState(null);

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setNewPhoto(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUsername.trim() === '' && newPhoto === null) {
      alert('No changes made.');
      return;
    }
    const updatedUserData = {
      username: newUsername.trim() !== '' ? newUsername.trim() : currentUsername,
      photo: newPhoto !== null ? URL.createObjectURL(newPhoto) : currentPhoto,
    };
    onUpdate(updatedUserData);
    setNewUsername('');
    setNewPhoto(null);
  };

  return (
    <div>
      <div class="container">
        <h1>Edit Profile</h1>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              <img
                src="//placehold.it/100"
                className="avatar img-circle"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>

              <input type="file" class="form-control" />
            </div>
          </div>

          <div className="col-md-9 personal-info">
            <div className="alert alert-info alert-dismissable">
              <a className="panel-close close" data-dismiss="alert">
                ×
              </a>
              <i className="fa fa-coffee"></i>
              This is an <strong>.alert</strong>. Use this to show important
              messages to the user.
            </div>
            <h3>Personal info</h3>

            <form className="form-horizontal" role="form">
              <div className="form-group">
                <label className='col-md-3 control-label'>Username:</label>
                <div className="col-md-8">
                  <input className="form-control" type="text" value="janeuser" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-8">
                  <input
                    type="button"
                    className="btn btn-primary"
                    value="Save Changes"
                  />
                  <span></span>
                  <input type="reset" class="btn btn-default" value="Cancel" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </div>

  );
}

export default Update;













// import React from "react";

// export default function Update() {
  
// }























// function Update() {
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const [errors, setErrors] = useState({});
//     const [input, setInput] = useState({
//         username: '',
//         image: '',
//     });

//     const validate = (input) => {
//         let err = {};

//         // USERNAME
//         !input.username ? err.username = 'User Name is required*' : err.username = '';
//         input.username && (input.username.length > 25 || input.username.length < 4) ? err.username = "Name must be between 4 and 25 characters*" : err.username = err.username;

//         // IMAGE
//         !input.image ? err.image = 'Image is required*' : err.image = '';
//         input.image && input.image.length < 4 ? err.image = "Image must be over 3 characters*" : err.image = err.image;

//         return err;
//     };

//     const handleChange = (e) => {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value,
//         });
//         setErrors(validate({
//             ...input,
//             [e.target.name] : e.target.value,
//         }));
//     };

//     const handleImageChange = (e) => {
//         setInput({
//             ...input,
//             image: e.target.files[0],
//         });
//         setErrors(validate({
//             ...input,
//             image : e.target.files[0],
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setErrors(validate(input));
//         if (Object.keys(errors).length === 0) {
//             alert('Invalid camps');
//         } else {
//             const formData = new FormData();
//             formData.append('username', input.username);
//             formData.append('image', input.image);
//             dispatch(updateUserInfo(formData));
//             setInput({
//                 username: '',
//                 image: '',
//             });
//             alert('Info Update successfully !')
//             history.push('/home');
//         }
//     };

//     return (
//         <Container>
//             <div className="owo">
//                 <div class="login-box">
//                     <Link to="/home">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
//                             <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
//                         </svg>
//                     </Link>
//                     <span className="iwi"> Update your profile
// </span>
//                     <form>
//                         <div class="user-box">
//                         <input

//                             placeholder="User Name"
//                             username="username"
//                             type="text"
//                             onChange={handleChange}
//                             />
//                             {errors.name && <p> {errors.name} </p>}
//                         </div>

//                         <div className="user-box">
//                         <input
//                             className="awa"
//                             placeholder="Image"
//                             name="image"
//                             type="file"
//                             onChange={handleChange}
//                             />
//                             {errors.image && <p> {errors.image} </p>}
//                         </div>

//                         <center>

//                             <button className="uwu" type="submit" disabled={
//                                 errors.name || errors.artist || errors.album || errors.genre || errors.image || errors.song ? true : false
//                             }> Update</button>

//                         </center>

//                     </form>
//                 </div>
//             </div>
//         </Container>

//     )
// }

// export default Update

// const Container = styled.div`

// .owo{
//     width: 100%;
//     height: 100vh;
//     display:grid;
//     place-items:center;
//     background-image: url(${imagen});

// }
// .iwi{
//     color: yellow;

// }

// .login-box {

//     min-width: 320px;
//     max-width: 500px;
//     padding: 40px;
//     background: rgba(24, 20, 20, 0.987);
//     box-sizing: border-box;
//     box-shadow: 0 15px 25px yellow;
//     border-radius: 10px;
//   }

//   .login-box .user-box {
//     position: relative;
//   }

//   .login-box .user-box input {
//     width: 100%;
//     padding: 10px 0;
//     font-size: 16px;
//     color: #fff;
//     margin-bottom: 0px;
//     border: none;
//     border-bottom: 1px solid #fff;
//     outline: none;
//     background: transparent;
//   }

//   .login-box .user-box label {
//     position: absolute;
//     top: 0;
//     left: 0;
//     padding: 10px 0;
//     font-size: 16px;
//     color: #fff;
//     pointer-events: none;
//     transition: .5s;
//   }

//   .login-box .user-box input:focus ~ label,
//   .login-box .user-box input:valid ~ label {
//     top: -20px;
//     left: 0;
//     color: #bdb8b8;
//     font-size: 12px;
//   }

//   @keyframes btn-anim1 {
//     0% {
//       left: -100%;
//     }

//     50%,100% {
//       left: 100%;
//     }
//   }
//   .uwu {
//     appearance: none;
//     background-color: transparent;
//     border: 0.125em solid yellow;
//     border-radius: 0.9375em;
//     box-sizing: border-box;
//     color: yellow;
//     cursor: pointer;
//     display: inline-block;
//     font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//     font-size: 16px;
//     font-weight: 600;
//     line-height: normal;
//     margin-top: 20px;
//     min-height: 3.75em;
//     min-width: 0;
//     outline: none;
//     padding: 1em 2.3em;
//     text-align: center;
//     text-decoration: none;
//     transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
//     user-select: none;
//     -webkit-user-select: none;
//     touch-action: manipulation;
//     will-change: transform;
//    }

//    .uwu:disabled {
//     pointer-events: none;
//    }

//    .uwu:hover {
//     color: black;
//     background-color: yellow;
//     box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
//     transform: translateY(-2px);
//    }

//    .uwu:active {
//     box-shadow: none;
//     transform: translateY(0);
//    }
//    p{
//     margin-bottom: 0px;
//     color: red;
//    }
//  .awa::file-selector-button {
//     border: none;
//     background-color: yellow;
//     color: black;
//     padding: 6px 10px;
//     border-radius: 10px;
//     cursor: pointer;
//     font-weight: 500;
// }
// `