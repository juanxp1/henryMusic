import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import { postSong } from "../../Actions/actions";
import imagen from "../NewSong/lol6.jpg";

function New() {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '',
        artist: '',
        album: '',
        genre: '',
        image: '',
        song: '',
    })

    const validate = (input) => {
        let err = {}

        // NAME
        !input.name ? err.name = 'Name is required*' : err.name = '';

        input.name && input.name.length > 25 || input.name && input.name.length < 4 ? err.name = "Name must be under 25 and over 3 characters*" : err.name = err.name;

        // ARTIST

        !input.artist ? err.artist = 'Artist is required*' : err.artist = '';

        input.artist && input.artist.length > 25 || input.artist && input.artist.length < 4 ? err.artist = "Artist must be under 25 and over 3 characters*" : err.artist = err.artist;

        // ALBUM

        !input.album ? err.album = 'Album is required*' : err.album = '';
  
        input.album && input.album.length > 25 || input.album && input.album.length < 4 ? err.album = "Album must be under 25 and over 3 characters*" : err.album = err.album;

        // GENRE

        !input.genre ? err.genre = 'Genre is required*' : err.genre = '';

        input.genre && input.genre.length < 4 ? err.genre = "Genre must be over 3 characters*" : err.genre = err.genre;

        // IMAGE
        
        !input.image ? err.image = 'Image is required*' : err.image = '';

        input.image && input.image.length < 4 ? err.image = "Image must be over 3 characters*" : err.image = err.image;

        // SONG

        !input.song ? err.song = 'Song is required*' : err.song = '';

        input.song && input.song.length < 4 ? err.song = "Song must be over 3 characters*" : err.song = err.song;


        return err;
    }


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(input))
        if(Object.keys(errors).length === 0) {
            alert('Invalid camps');
        }
        else{
            console.log(input);
            dispatch(postSong(input));
            setInput({
                name: '',
                artist: '',
                album: '',
                genre: '',
                image: '',
                song: '',
            });
            alert('Song created successfully !')
            history.push('/home')
        }
    }


    return (
        <Container >
            
            <div className="owo">

                <div class="login-box">
    
                
                    <Link to="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                        </svg>
                    </Link>
                    
                    <span className="iwi"> Create your song</span>
                    <form>
                        <div className="user-box">
                        <input
                            
                            placeholder="Name"       
                            name="name"
                            type="text"
                            onChange={handleChange}
                            />
                            {errors.name && <p> {errors.name} </p>}       
                        </div>

                        <div className="user-box">
                        <input
                            className="input-group mb-3"
                            placeholder="Artist"
                            name="artist"
                            type="text"
                            onChange={handleChange}
                            />
                            {errors.artist && <p> {errors.artist} </p>}                                     
                        </div>
                        
                        <div className="user-box">
                        <input
                            className="input-group mb-3"
                            placeholder="Genre"
                            name="genre"
                            type="text"
                            onChange={handleChange}
                            />
                            {errors.genre && <p> {errors.genre} </p>}
                        </div>
                        <div className="user-box">
                        <input
                            
                            placeholder="Album"
                            name="album"
                            type="text"
                            onChange={handleChange}
                            />
                            {errors.album && <p> {errors.album} </p>}
                        </div>

                        <div className="user-box">
                        <input
                            className="awa"        
                            placeholder="Song"
                            name="song"
                            type="file"
                            onChange={handleChange}
                            />
                            {errors.song && <p> {errors.song} </p>}
                        </div>    

                        <div className="user-box">
                        <input
                            className="awa"         
                            placeholder="Image"
                            name="image"
                            type="file"
                            onChange={handleChange}
                            />
                            {errors.image && <p> {errors.image} </p>}
                        </div>


                        <center>
                        
                            <button className="uwu" type="submit" disabled={
                                errors.name || errors.artist || errors.album || errors.genre || errors.image || errors.song ? true : false
                            }> Create</button>
                        
                        </center>
                        
                    </form>
                </div>
            </div>
        </Container>

    )
}


export default New

const Container = styled.div`

.owo{
    width: 100%;
    height: 100vh;
    display:grid;
    place-items:center;
    background-image: url(${imagen});
    
}
.iwi{
    color: yellow;
    
}

.login-box {
    
    min-width: 320px;
    max-width: 500px;
    padding: 40px;
    background: rgba(24, 20, 20, 0.987);
    box-sizing: border-box;
    box-shadow: 0 15px 25px yellow;
    border-radius: 10px;
  }
  
  .login-box .user-box {
    position: relative;
  }
  
  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 0px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  
  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }
  
  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #bdb8b8;
    font-size: 12px;
  }
  
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
  
    50%,100% {
      left: 100%;
    }
  }
  .uwu {
    appearance: none;
    background-color: transparent;
    border: 0.125em solid yellow;
    border-radius: 0.9375em;
    box-sizing: border-box;
    color: yellow;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin-top: 20px;
    min-height: 3.75em;
    min-width: 0;
    outline: none;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
   }
   
   .uwu:disabled {
    pointer-events: none;
   }
   
   .uwu:hover {
    color: black;
    background-color: yellow;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
   }
   
   .uwu:active {
    box-shadow: none;
    transform: translateY(0);
   }
   p{
    margin-bottom: 0px;
    color: red;
   }
 .awa::file-selector-button {
    border: none;
    background-color: yellow;
    color: black;
    padding: 6px 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
}
`