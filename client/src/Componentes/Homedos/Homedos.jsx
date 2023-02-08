import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Pagination from '../Paginacion/Pagination'
import styled from 'styled-components';
import Hardcode from './Hardcode';
import { getAllArtists } from '.././../Actions/actions.js'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';


const Homedos = () => {
    const { user } = useAuth0()
    const dispatch = useDispatch();
    const infoMusic = useSelector((state) => state.artists);
    const URL = 'https://henrymusic.tech/images/';


    useEffect(() => {
        dispatch(getAllArtists(30));
        // dispatch(getArtistAlbums('coldplay'));

    }, []);

    //console.log(infoMusic.artistAlbums)
    //    const CurrentCards = allAlbums;
    console.log('ARTIST', infoMusic?.artists)

    return (

        <Container>

            <div className="contenedor mt-0 container">
                <div className="container-fluid">
                    <h1 className='h1'>¡Buenos días! <span>{user?.nickname}</span>  </h1>
                    <div className='container'><Hardcode /></div>
                    {/* <div className='container  d-flex justify-content-around bg-dark'>
                        {
                            infoMusic.artistDetail.length > 0 ?
                                infoMusic.artistDetail.map(c => {
                                    return (
                                        <div>
                                            <h1 className='h1 d-flex justify-content-center'>Foto del Album</h1>
                                            <Card key={c.id} id={c.id} name={c.name}  image={c.image} country={c.country} />
                                        </div>

                                    )
                                }) :
                                <p>
                                    Loading...
                                </p>
                        }
                 
                    </div> */}
                    <h1 className='d-flex justify-content-around h1'>Lo mas escuchado </h1>


                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className=" container-fluid d-flex justify-content-center carousel-item active" data-bs-interval="10000000">
                                {
                                    infoMusic.artists ?
                                        infoMusic?.artists.map(c => {
                                            return (
                                                <div className='carousel-item active'>
                                                    <Card key={c.id} id={c.id} name={c.name} genre={c.genres.map(el => (<div>{el.name}</div>))} image={URL + c.images[0].path + '.jpg'} />
                                                </div>

                                            )
                                        }) :
                                        <h1>
                                            Loading....
                                        </h1>
                                }
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <Pagination />
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
    margin: 0;
    padding: auto;
    color: white;
    
}

.h1{
    color: #FFFF01;
    text-decoration: underline;
    padding-bottom: 10px;
}


.contenedor{
    
    height: auto;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    margin-left: 230px  !important;
    color: white;
    width: auto;
    display: flex;
}



`