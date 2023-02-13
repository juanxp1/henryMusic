import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components";
import foto from "../NewSong/foto.jpg"
import Button from 'react-bootstrap/Button';
import { postSong } from "../../Actions/actions";


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
        <Container className="container-fluid">
            <div >
                <div className="container-fluid d-flex justify-content-center ">
                    <img className="img" src={foto} alt="Foto" />

                </div>
                <div className="container-fluid d-flex justify-content-center ">
                    <Link className="" to="/home"><Button type="button" className="btn btn-warning" >Go back home</Button></Link>
                </div>



                <div className="">
                    <h1 className=" text-center">Create new Song</h1>
                    <form className="" onSubmit={handleSubmit} >


                        <div className="container">
                            <input
                                className="input-group mb-3"
                                placeholder="Name"
                                name="name"
                                type="text"
                                onChange={handleChange}
                            />
                            {errors.name && <p> {errors.name} </p>}
                        </div>


                        <div className="container">
                            <input
                                className="input-group mb-3"
                                placeholder="Artist"
                                name="artist"
                                type="text"
                                onChange={handleChange}
                            />
                            {errors.artist && <p> {errors.artist} </p>}
                        </div>


                        <div className="container">
                            <input
                                className="input-group mb-3"
                                placeholder="Genre"
                                name="genre"
                                type="text"
                                onChange={handleChange}
                            />
                            {errors.genre && <p> {errors.genre} </p>}
                        </div>


                        <div className="container">
                            <input
                                className="input-group mb-3"
                                placeholder="Album"
                                name="album"
                                type="text"
                                onChange={handleChange}
                            />
                            {errors.album && <p> {errors.album} </p>}
                        </div>



                        <div className="container">
                        <input
                                className="input-group mb-3"
                                placeholder="Song"
                                name="song"
                                type="file"
                                onChange={handleChange}
                            />
                            {errors.song && <p> {errors.song} </p>}
                        </div>

                        
                        <div className="container">
                        <input
                                className="input-group mb-3"
                                placeholder="Image"
                                name="image"
                                type="file"
                                onChange={handleChange}
                            />
                            {errors.image && <p> {errors.image} </p>}
                        </div>

                        <div className="container-fluid d-flex justify-content-center ">

                            <button className="btn btn-dark" type="submit" disabled={
                                errors.name || errors.artist || errors.album || errors.genre || errors.image || errors.song ? true : false
                            }> New</button>

                        </div>
                        
                    </form>

                </div>

            </div>
        </Container>

    )
}



export default New

const Container = styled.div`

background-color: black;
height: 100vh;

.img {
    width: auto;
    height: 300px;
}

.btn {
    background-color: #FFFF01;
    color: black;
    font-family: var(--bs-font-sans-serif);
}

h1 {
    font-family: var(--bs-font-sans-serif);
    color: white;
}
`