import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Pagination from '../Paginacion/Pagination'
import styled from 'styled-components';
import Hardcode from './Hardcode';
import { getAllArtists } from '.././../Actions/actions.js'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import Player1 from '../Audio-Player/Player1';


const Homedos = () => {
    const { user } = useAuth0()
    const dispatch = useDispatch();
    const infoMusic = useSelector((state) => state.artists);
    const URL = 'https://henrymusic.tech/images/';


    useEffect(() => {
        dispatch(getArtistDetail('coldplay'));
        dispatch(getArtistAlbums('coldplay'));

    }, []);

    //console.log(infoMusic.artistAlbums)
    //    const CurrentCards = allAlbums;
    console.log('ARTIST', infoMusic?.artists)

    return (

        <Container>

            <div className="contenedor mt-0 container-fluid">
                <div className="container-fluid">
                    <h1 className='h1 container-fluid'>¡Buenos días! <span>{user?.nickname}</span>  </h1>
                    <div className='container'><Hardcode /></div>

                    <h1 className='d-flex justify-content-start h1'>Lo mas escuchado </h1>


                    <div class="swiffy-slider">
                        <ul class="slider-container">
                            {
                                infoMusic.artistAlbums.length > 0 ?
                                    infoMusic?.artistAlbums.map(c => {
                                        return (
                                            <div className='carousel-item active'>
                                                <Card key={c.id} id={c.id} name={c.name} image={c.image} genre={c.genre} year={c.year} />
                                            </div>



                                        )
                                    }) :
                                    <h1>
                                        Loading....
                                    </h1>
                            }
                        </ul>

                        <button type="button" class="slider-nav"></button>
                        <button type="button" class="slider-nav slider-nav-next"></button>

                        <div class="slider-indicators">
                            <button class="active"></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>

                    <Pagination />
                    <div className='fixed-bottom'>
                        <Player1 />
                    </div>
                </div>
            </div>
            <div>
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



.h1{
    color: white;
    font-weight: 600;
    padding-bottom: 10px;
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
    
}



`