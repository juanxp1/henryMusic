import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlayer, Landing, isPlaying } from '../../Actions/actions';
import styled from 'styled-components';
import { getArtist, resetDetalles } from '../../Actions/actions';
import { Link } from 'react-router-dom'
import play from '../Detail/play.png'
import CounterScreen from "./CounterScreen"



function Detail(props) {

    const convertidor = (milisegundos) => {
        const minutos = Math.floor(milisegundos / 1000 / 60);
        milisegundos -= Math.floor(minutos * 60 * 1000);
        const segundos = Math.floor(milisegundos / 1000);
        return `${minutos}:${segundos}`;
    }

    const dispatch = useDispatch();
    const infoMusic = useSelector(state => state.artistDetail);
    const [data, setData] = useState({
        name: '',
        image: '',
        tracks: [],
        genres: [],
        i: 0,
    })

    function reset() {
        dispatch(resetDetalles());
    }


    function handleClick(e) {
        setData({ ...data, i: e })
        dispatch(getPlayer({ tracks: data.tracks, i: e }))
        dispatch(isPlaying())
    }

    useEffect(() => {
        dispatch(getArtist(props.match.params.id));
        dispatch(Landing());
    }, []);

    useEffect(() => {
        if (infoMusic.images?.length) {
            setData({ name: infoMusic.name, image: infoMusic.images[0].url, tracks: infoMusic.tracks, i: 0, genres: infoMusic.genres.map(el => el.name) })
        }
    }, [infoMusic])


    return (
        <Div>

            <div className='contenedor'>
                <div className=" bg-dark mw-100 pt-2 pb-1  container-fluid oki" >
                    <div className="row g-0 pt-2 container-fluid">
                        <div className="col-md-4 container-fluid">
                            <img src={data.image} className="img-thumbnail bg-dark pancho " alt="artista" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <br />
                                <p className="card-text p-0">Playlist</p>
                                <h1 className="card-title display-1 p-0 m-0 name">{data.name}</h1>
                                <h3> {data.genres.map(el => el + ', ')} </h3>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <Link onClick={reset} to={"/home"}>
                        <button className=" regresar btn-dark" type="button">Volver al Menu</button>
                    </Link>
                    <Link onClick={reset} to={"/playlist"}>
                        <button className=" regresar btn-dark" type="button">Tus me gustas</button>
                    </Link>
                </div>
            </div>


            {/* PLAYLIST */}


            <div className='contenedordos'>
                <ol className="list-group list-group-numbered container-fluid ">
                    {data.tracks.map(el => (

                        <li className=" ms-0 list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img onClick={() => handleClick(data.tracks.indexOf(el))} className='fotico ms-2' src={play} alt="play" />

                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">{el.name} </div>
                            </div>
                            <div className='fw-bold'> {convertidor(el.duration)}<CounterScreen track={el} />  </div>
                        </li>

                    ))}

                </ol>

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
    width: 28px;
    cursor: pointer;
}

.fotico:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 0.3s;
  
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
    max-height: 400px;   
}

.pancho {
    max-width: 350px;
    max-height: 400px;
    box-shadow: 19px 17px 13px -9px rgba(255,255,1,0.89);
-webkit-box-shadow: 19px 17px 13px -9px rgba(255,255,1,0.89);
-moz-box-shadow: 19px 17px 13px -9px rgba(255,255,1,0.89);
}



.contenedor{
    width: auto;
    height: auto;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    /* margin-left: 230px  !important; */
    color: white;
    /* display: flex;
    position: relative; */
    @media screen and (min-width: 960px){
        margin-left: 230px 
}




} 
 .contenedordos{
    width: auto;
    height: 120vh;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    /* margin-left: 230px  !important; */
    color: white;
    border:none;
    /* display: flex;
    position: relative; */

    @media screen and (min-width: 960px){
        margin-left: 230px 
}

} 
.detail-button{
    background-color: transparent;
    border: none;
    
}
`
