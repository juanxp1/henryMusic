import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Landing } from '.././../Actions/actions.js';
import styled from 'styled-components';
import Hardcode from './Hardcode';
import { getAllArtists } from '.././../Actions/actions.js'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { Link } from 'react-router-dom'
import Player1 from '../Audio-Player/Player1.jsx';


const Homedos = () => {
    const { user } = useAuth0()
    const dispatch = useDispatch();
    const infoMusic = useSelector((state) => state.artists);


    useEffect(() => {
        dispatch(getAllArtists());
        dispatch(Landing());

    }, []);

    //console.log(infoMusic.artistAlbums)
    //    const CurrentCards = allAlbums;
    console.log('ARTIST', infoMusic?.artists)

    return (

        <Container >
            <div className="contenedor ">
                <div className='container-fluid'>
                    <h1 className='h1 '>¡Buenos días! <span className='pit'>{user?.nickname.toUpperCase()}</span>  </h1>
                    <div className='container'><Hardcode /></div>


                    <h2 className='d-flex justify-content-start h1'>Lo mas escuchado </h2>
                    <div className="swiffy-slider">
                        <ul className="slider-container slider-item-show4">

                            {
                                infoMusic.artists ?
                                    infoMusic?.artists.map(c => {
                                        return (
                                            <li>
                                                <Link to={"/detail/" + c.id}>
                                                    <Card key={c.id} id={c.id} name={c.name} image={c.images[0].url} /></Link>
                                                {/* genre={c.genres.map(el => (<span> {el.name} </span>))} */}
                                            </li>

                                        )
                                    }) :
                                    <span>Cargando</span>


                            }
                        </ul>

                        <button type="button" className="slider-nav"></button>
                        <button type="button" className="slider-nav slider-nav-next"></button>

                        <div className="slider-indicators">
                            <button className="active"></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>

                    <h2 className='d-flex justify-content-start h1'> Top 50 Argentina </h2>
                    <div className="swiffy-slider">
                        <ul className="slider-container slider-item-show4">

                            {
                                infoMusic.artists ?
                                    infoMusic?.artists.map(c => {
                                        return (
                                            <li>
                                                <Link to={"/detail/" + c.id}>
                                                    <Card key={c.id} id={c.id} name={c.name} image={c.images[0].url} /></Link>
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

                        <div className="slider-indicators">
                            <button className="active"></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>




                    <h2 className='d-flex justify-content-start h1'>Temas para {user?.name}</h2>


                    <div className="swiffy-slider">
                        <ul className="slider-container slider-item-show4 ">

                            {
                                infoMusic.artists ?
                                    infoMusic?.artists.map(c => {
                                        return (
                                            <li >
                                                <Link to={"/detail/" + c.id}>
                                                    <Card key={c.id} id={c.id} name={c.name} image={c.images[0].url} /></Link>
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

                        <div className="slider-indicators">
                            <button className="active"></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>

                            
                </div>
            </div>

        </Container>
        
    )

}

export default Homedos

const Container = styled.div`
*{
    margin: auto;
    padding: auto;
    color: white;
}

.pit {
    text-decoration: underline #FFFF01;
}


.h1{
    color: whitesmoke;
    font-weight: 600;
    padding:10px;
}


.contenedor{
    width: auto;
    height: auto;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    margin-left: 230px  !important;
    color: white;
    display: flex;
    position: relative;
    padding-bottom: 50px;

    
}





`