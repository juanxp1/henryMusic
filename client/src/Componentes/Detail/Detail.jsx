import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Landing } from '../../Actions/actions';
import styled from 'styled-components';
import favi from '../Detail/favi.png'
import { getArtist } from '../../Actions/actions';
import { Link } from 'react-router-dom'
import Player1 from '../Audio-Player/Player1';
import play from '../Detail/play.png'

function Detail(props) {

    const dispatch = useDispatch();
    const infoMusic = useSelector(state => state.artistDetail);
    const [data, setData] = useState({
        name: '',
        image: '',
        tracks: [],
    })

    // useEffect(() => dispatch(Landing()), [])

    useEffect(() => {
        dispatch(getArtist(props.match.params.id));
        dispatch(Landing());

    }, []);

    useEffect(() => {
        if (infoMusic.images?.length) {
            setData({ name: infoMusic.name, image: infoMusic.images[0].url, tracks: infoMusic.tracks })
        }
    }, [infoMusic])

    console.log(infoMusic)


    return (
        <Div>

            <div className='contenedor'>

                <div className=" bg-dark mw-100 pt-2 pb-1  container-fluid oki" >

                    <div className="row g-0 container-fluid">
                        <div className="col-md-4 container-fluid">
                            <img src={data.image} className="img-thumbnail bg-dark pancho " alt="..." />


                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <br />
                                <p className="card-text p-0">Playlist</p>
                                <h1 className="card-title display-1 p-0 m-0 name">{data.name}</h1>

                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                    <Link to={"/home"}>

                        <button className=" regresar btn-dark" type="button">Volver al Menu</button>

                    </Link>
                </div>
            </div>


            {/* PLAYLIST */}


            <div className='contenedordos'>
                <ol className="list-group list-group-numbered container-fluid ">
                    {data.tracks.map(el => (
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src={play} alt="" />
                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">{el.name}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

            <div className='fixed-bottom'>
                <Player1 tracks={data.tracks} />
            </div>



        </Div>
    )

}

export default Detail

const Div = styled.div`

.regresar {
   font-weight: 500;
    font-size: 20px;
    color: #FFFF01;
}

span{
    font-size: 15px;
}

li{
    border:none;
}

.fotico{
    width: 25px;
}

.name {
    font-weight: 600;
    text-decoration: overline #FFFF01;
}
p{
    font-size: 30px;
}

.oki {
    max-height: auto;
    background: rgb(0,0,0);
    background: linear-gradient(124deg, rgba(0,0,0,1) 5%, rgba(53,24,74,1) 100%, rgba(63,28,87,1) 100%, rgba(91,40,125,1) 100%, rgba(131,58,180,1) 100%);
}

color: white;

img {
    width: 350px;
    border-radius: 20px;
    max-width: 350px;  
    
}

.pancho {
    max-width: 350px;
    max-height: 400px;
    box-shadow: 19px 17px 13px -9px rgba(255,255,1,0.89);
-webkit-box-shadow: 19px 17px 13px -9px rgba(255,255,1,0.89);
-moz-box-shadow: 19px 17px 13px -9px rgba(255,255,1,0.89);
}

background-color: black;

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


.contenedordos{
    width: auto;
    height: 100vh;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    margin-left: 230px  !important;
    color: white;
    display: flex;
    position: relative;

}


`