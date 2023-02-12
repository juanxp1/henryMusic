import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Landing } from '.././../Actions/actions.js';
import styled from 'styled-components';
import Hardcode from '../HardCode/Hardcode';
import { getAllArtists, filtroGenero } from '.././../Actions/actions.js'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { Link } from 'react-router-dom'
import Player1 from '../Audio-Player/Player1.jsx';


const Homedos = () => {
    const { user } = useAuth0()
    const dispatch = useDispatch();
    const infoMusic = useSelector((state) => state.artists);
    const [info, setInfo] = useState([])

    function handleGenero(genero) {
        genero.preventDefault();
        dispatch(filtroGenero(genero.target.value))
    }



    useEffect(() => {
        dispatch(getAllArtists(100));
        dispatch(Landing());
    }, []);


    //console.log(infoMusic.artistAlbums)
    //    const CurrentCards = allAlbums;


    return (

        <Container >
            <div className="contenedor ">
                <div className='container-fluid'>
                    <h1 className='h1 '>¡Buenos días! <span className='pit'>{user?.nickname.toUpperCase()}</span>  </h1>
                    <h2 className='d-flex justify-content-start h1'>Top artistas </h2>
                    <div className='hcode'>
                        {

                            infoMusic.artists ?
                                infoMusic.artists?.slice(0, 6).map(c => {
                                    return (
                                        <li>
                                            <Link to={"/detail/" + c.id}>
                                                <Hardcode key={c.id} id={c.id} name={c.name} image={c.images[0]?.url} genre={c.genres.map(el => (<span> {el.name} </span>))} />
                                            </Link>
                                        </li>

                                    )
                                }) :
                                <span>Cargando...</span>
                        }
                    </div>


                    <div className='btn-wrapper'>
                        <select onChange={e => handleGenero(e)} className='btn'>
                            <option value="All">All Generos</option>
                            <option value="Pop">Pop</option>
                            <option value="Trap">Trap</option>
                            <option value="Latin">Latin </option>
                            <option value="Rock">Rock </option>
                        </select>
                    </div>

                    <h2 className='d-flex justify-content-start h1'>Lo mas escuchado </h2>
                    <div className="swiffy-slider ">
                        <ul className="slider-container slider-item-show4 d-flex justify-content-center h-100 d-inline-block">
                            {console.log(info)}
                            {
                                infoMusic.artists ?
                                    infoMusic.artists.map(c => {
                                        return (
                                            <li className='ms-0'>
                                                <Link to={"/detail/" + c.id}>
                                                    <Card key={c.id} id={c.id} name={c.name} image={c.images[0]?.url} genre={c.genres.map(el => (<span> {el.name} </span>))} /></Link>
                                                {/* genre={c.genres.map(el => (<span> {el.name} </span>))} */}
                                            </li>

                                        )
                                    }) :
                                    <span>Cargando</span>


                            }
                        </ul>

                        <button type="button" className="slider-nav"></button>
                        <button type="button" className="slider-nav slider-nav-next"></button>

                    </div>

                    <h2 className='d-flex justify-content-start h1'> Top 50 Argentina </h2>
                    <div className="swiffy-slider">
                        <ul className="slider-container slider-item-show4 d-flex justify-content-center">

                            {
                                infoMusic.artists ?
                                    infoMusic?.artists.map(c => {
                                        return (
                                            <li>
                                                <Link to={"/detail/" + c.id}>
                                                    <Card key={c.id} id={c.id} name={c.name} image={c.images[0]?.url} genre={c.genres.map(el => (<span> {el.name} </span>))} /></Link>
                                            </li>

                                        )
                                    }) :
                                    <span>
                                        Cargando
                                    </span>
                            }
                        </ul>

                        <button type="button" className="slider-nav"></button>
                        <button type="button" className="slider-nav slider-nav-next"></button>
                    </div>




                    <h2 className='d-flex justify-content-start h1'>Temas para {user?.name}</h2>


                    <div className="swiffy-slider">
                        <ul className="slider-container slider-item-show4  d-flex justify-content-center">

                            {
                                infoMusic.artists ?
                                    infoMusic?.artists.map(c => {
                                        return (
                                            <li className='' >
                                                <Link to={"/detail/" + c.id}>
                                                    <Card key={c.id} id={c.id} name={c.name} image={c.images[0]?.url} genre={c.genres.map(el => (<span> {el.name} </span>))} /></Link>
                                            </li>
                                        )
                                    }) :
                                    <span>
                                        Loading....
                                    </span>
                            }
                        </ul>

                        <button type="button" className="slider-nav"></button>
                        <button type="button" className="slider-nav slider-nav-next"></button>
                    </div>



                </div>
            </div>

        </Container>

    )

}

export default Homedos

const Container = styled.div`
*{
    text-decoration: none;
    margin: auto;
    padding: auto;
    color: white;
}
li{
    list-style: none;
    text-decoration: none;
}
.hcode{   
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1px;
}



.pit {
    text-decoration: underline #FFFF01;
}





.h1{
    color: #d8d8d8;
    font-weight: 600;
    padding:10px;
}


.contenedor{

    width: auto;
    height: auto;
    background: rgb(0,0,0);
    background: linear-gradient(124deg, rgba(0,0,0,1) 5%, rgba(53,24,74,1) 100%, rgba(63,28,87,1) 100%, rgba(91,40,125,1) 100%, rgba(131,58,180,1) 100%);
    margin-left: 230px  !important;
    color: white;
    display: flex;
    position: relative;
    padding-bottom: 50px;

    
}

.btn-wrapper {
    margin-top:20px;
    width: 220px;
    height: 50px;
    position: relative;
    z-index: 1;
    background: linear-gradient(270deg, #96f061, #a259d3, #1d9de0, #e790b0);
    box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.363);
    background-size: 800% 800%;
    animation: animateBorder 9s ease infinite;
  }
  
  .btn {
    width: 95%;
    height: 90%;
    position: absolute;
    padding: 5px;
    border: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #212121;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 4.5px;
    color: white;
    font-weight: bold;
  }
  
  @keyframes animateBorder {
    0% {
      background-position: 0% 50%
    }
  
    50% {
      background-position: 100% 50%
    }
  
    100% {
      background-position: 0% 50%
    }
  }



`