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

    // console.log(infoMusic.artistAlbums)
    //    const CurrentCards = allAlbums;
    console.log('ARTISTA', infoMusic?.artistDetail[0]?.name)

    return (
        // <div style={{marginTop: "100px", marginLeft:"100px"}}>{infoMusic?.artistDetail[0]?.name} </div>
        <Container>
            <Pagination />
            <div className="contenedor">
                <div className="contenedor_contenido">
                    <div className="titulos">

                        <h1>¡Buenos días! {user?.nickname} </h1>

                        <Hardcode />
                        <div className="cards">
                            {
                                infoMusic.artistDetail.length > 0 ?
                                    infoMusic.artistDetail.map(c => {
                                        return (
                                            <Card key={c.id} id={c.id} name={c.name} image={c.image} capital={c.country} />
                                        )
                                    }) :
                                    <div>
                                        <p>
                                            No artist were found with these parameters.
                                        </p>
                                    </div>
                            }

                            {
                                infoMusic.artistAlbums.length > 0 ?
                                    infoMusic.artistAlbums.map(c => {
                                        return (
                                            <Card key={c.id} id={c.id} name={c.name} image={c.image} continents={c.year} />
                                        )
                                    }) :
                                    <div>
                                        <p>
                                            No Albums were found with these parameters.
                                        </p>
                                    </div>
                            }
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
    margin: 0;
    padding: auto;
    box-sizing: border-box;
}

.contenedor{
    height: 140vh;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    margin-left: 230px;
    text-align: start;
    color: white;
    width: auto;
}


`