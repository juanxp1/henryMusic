import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Pagination from '../Paginacion/Pagination'
import styled from 'styled-components';
import Hardcode from './Hardcode';
import { getArtistDetail, getArtistAlbums } from '.././../Actions/actions.js'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';


const Homedos = () => {
    const { user } = useAuth0()
    const dispatch = useDispatch();
    const infoMusic = useSelector((state) => state);
    // const currentinfoTotal = infoMusic.slice()(firstIndex, lastIndex)


    useEffect(() => {
        dispatch(getArtistDetail('coldplay'));
        dispatch(getArtistAlbums('coldplay'));

    }, []);

    //console.log(infoMusic.artistAlbums)
    //    const CurrentCards = allAlbums;
    console.log('ARTISTA', infoMusic?.artistDetail)

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
                    <h1 className='d-flex justify-content-around h1'>Canciones</h1>
                    <div className='card-group  d-flex justify-content-around'>


                        {
                            infoMusic.artistAlbums.length > 0 ?
                                infoMusic?.artistAlbums.map(c => {
                                    return (
                                        <Card key={c.id} id={c.id} name={c.name} image={c.image} genre={c.genre} year={c.year} />
                                    )
                                }) :

                                <p>
                                    Loading....
                                </p>

                        }
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