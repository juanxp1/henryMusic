import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getAllAlbums, Landing } from '.././../Actions/actions.js';
import styled from 'styled-components';
import Hardcode from '../HardCode/Hardcode';
import { getAllArtists, filtroGenero } from '.././../Actions/actions.js'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { Link } from 'react-router-dom'
import Player1 from '../Audio-Player/Player1.jsx';
import registre from './registre.jpg'



const Homedos = () => {


    const { user, isAuthenticated } = useAuth0()
    const dispatch = useDispatch();
    const infoMusic = useSelector((state) => state.artists);
    const infoAlbum = useSelector(state => state.albums)

    function handleGenero(genero) {
        genero.preventDefault();
        dispatch(filtroGenero(genero.target.value))
    }





    useEffect(() => {
        dispatch(getAllArtists(100));
        dispatch(Landing());
        dispatch(getAllAlbums(50))
    }, []);


    console.log('ALBUM', infoAlbum.albums)
    console.log('ARTIST', infoMusic.artists)

    //console.log(infoMusic.artistAlbums)
    //    const CurrentCards = allAlbums;



    return (
        isAuthenticated ? (
            <Container >
                <div className="contenedor ">
                    <div className='uwu'>
                        <div className="loaderRectangle">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <h1 className='h1 '>Bienvenido  <span className='pit'>{user?.nickname.toUpperCase()}</span></h1>
                        <h2 className='d-flex justify-content-center mt-3 mb-2 h1 '>Top artistas </h2>
                        <div className='hcode'>
                            {
                                infoAlbum.albums ?
                                    infoAlbum.albums?.slice(44, 50).map(c => {
                                        return (

                                            <li>
                                                <Hardcode key={c.id} id={c.id} name={c.name} image={c.images[0]?.url} tracks={c.tracks} />
                                            </li>

                                        )
                                    }) :
                                    <span>Cargando...</span>
                            }
                        </div>
                        <div className='btn-wrapper mt-0 pt-0'>
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
                            <ul className="slider-container slider-item-show5 d-flex justify-content-start h-100 d-inline-block">
                                {
                                    infoMusic.artists ?
                                        infoMusic.artists.map(c => {
                                            return (
                                                <li className='ms-0'>
                                                    <Link to={"/detail/" + c.id}>
                                                        <Card key={c.id} id={c.id} name={c.name} image={c.images[2]?.url} genre={c.genres.map(el => (<span> {el.name} </span>))} /></Link>
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

        ) : <Verificado className='container-fluid'>
            <div className='contenedor'>
                <h1 className=' w-100 d-flex justify-content-center bg-dark text-light'>Acceso solo para usuarios Registrados</h1> <img className='contenedor img-fluid wx-100 mt-0' src={registre} alt="nofount" />
            </div>
        </Verificado>
    )

}


export default Homedos

const Container = styled.div`

*{
    text-decoration: none;
    margin: auto;
    padding: auto;
    color: #ffffff;
}

.pikachu{
    font-size: 13px;
    color: #FFFF01;
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
    color: #ffffff / #fff;
    font-weight: 600;
    padding:10px;
}


.contenedor{
    
    width: auto;
    height: auto;
    max-height: 300vh;
    background: rgb(0,0,0);
    background: linear-gradient(124deg, rgba(0,0,0,1) 5%, rgba(53,24,74,1) 100%, rgba(63,28,87,1) 100%, rgba(91,40,125,1) 100%, rgba(131,58,180,1) 100%);
    margin-left: 230px  !important;
    color: white;
    display: flex;
    position: relative;
    padding-bottom: 0px;

    
}
.container-fluid{
    animation-name: container-fluid;
    animation-duration: 2s;
}
@keyframes container-fluid{
    0% {
        opacity: 0;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
}


.btn-wrapper {
    border-radius: 10px;
    margin-top:20px;
    width: 220px;
    height: 50px;
    position: relative;
    z-index: 1;
    background: linear-gradient(270deg, #FFFF01, white, #000000, #000000);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.363);
    background-size: 800% 800%;
    animation: animateBorder 8s ease infinite;
  }
  
  .btn {
    width: 95%;
    height: 90%;
    position: absolute;
    padding: 0px;
    border: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #131313;
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

  .uwu{
    animation-name: uwu;
    animation-duration: 6s;
    opacity: 0;
    position: absolute;
    top: 300px;
    left: 550px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes uwu{
    0% {
        opacity: 1;
      }
    
      75% {
        opacity: 0;
      }
    
      100% {
        opacity: 0;
      }
  }
  .loaderRectangle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 3px;
   }
   
   .loaderRectangle div {
    width: 10px;
    height: 16px;
    animation: .9s ease-in-out infinite;
    background: linear-gradient(270deg, yellow, white, orange, red);
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
   }
   
   .loaderRectangle div:nth-child(1) {
    animation-name: rectangleOneAnim;
    animation-delay: 1s;
   }
   
   @keyframes rectangleOneAnim {
    0% {
     height: 15px;
    }
   
    40% {
     height: 30px;
    }
   
    100% {
     height: 15px;
    }
   }
   
   .loaderRectangle div:nth-child(2) {
    animation-name: rectangleTwoAnim;
    animation-delay: 1.1s;
   }
   
   @keyframes rectangleTwoAnim {
    0% {
     height: 15px;
    }
   
    40% {
     height: 40px;
    }
   
    100% {
     height: 15px;
    }
   }
   
   .loaderRectangle div:nth-child(3) {
    animation-name: rectangleThreeAnim;
    animation-delay: 1.2s;
   }
   
   @keyframes rectangleThreeAnim {
    0% {
     height: 15px;
    }
   
    40% {
     height: 50px;
    }
   
    100% {
     height: 15px;
    }
   }
   
   .loaderRectangle div:nth-child(4) {
    animation-name: rectangleFourAnim;
    animation-delay: 1.3s;
   }
   
   @keyframes rectangleFourAnim {
    0% {
     height: 15px;
    }
   
    40% {
     height: 40px;
    }
   
    100% {
     height: 15px;
    }
   }
   
   .loaderRectangle div:nth-child(5) {
    animation-name: rectangleFiveAnim;
    animation-delay: 1.4s;
   }
   
   @keyframes rectangleFiveAnim {
    0% {
     height: 15px;
    }
   
    40% {
     height: 30px;
    }
   
    100% {
     height: 15px;
    }
   }

  

`
// SOLO PARA CORREOS VERIFICADO

const Verificado = styled.div`

*{
    text-decoration: none;
    margin: auto;
    padding: auto;
    color: white;
}


.contenedor{
    width: auto;
    height: auto;
    max-height: 300vh;
    background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,0,1) 100%, rgba(0,0,0,1) 100%);
    margin-left: auto;
    color: white;
    display: flex;
    position: relative;
    padding-bottom: 0px;  
}

`