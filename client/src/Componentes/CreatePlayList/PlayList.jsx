import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaylists, getPlaylistTracks, getUser, getPlayer, isPlaying, playlistDeleteTrack } from '../../Actions/actions';
import play from '../Detail/play.png'


function PlayList() {

    const convertidor = (milisegundos) => {
        const minutos = Math.floor(milisegundos / 1000 / 60);
        milisegundos -= Math.floor(minutos * 60 * 1000);
        const segundos = Math.floor(milisegundos / 1000);
        return `${minutos}:${segundos}`;
    }

    const { user, isAuthenticated } = useAuth0();
    const infoToken = useSelector(state => state.token)
    const dispatch = useDispatch()
    const playlistTracks = useSelector(state => state.playlistTracks)
    const playlist = useSelector(state => state.playlists.playlists)

    const [data, setData] = useState({
        name: '',
        tracks: [],
        i: 0,
    })

    function handleClick(e) {
        setData({ ...data, i: e })
        dispatch(getPlayer({ tracks: data.tracks, i: e }))
        dispatch(isPlaying())
    }

    function deleteTrack (track_id) {
        dispatch(playlistDeleteTrack(playlist[0].id, track_id))
    }


    useEffect(() => {
        if(infoToken){
            dispatch(getUser(user))
            dispatch(getAllPlaylists())
        }
    }, [infoToken])

    useEffect(() => {
        isAuthenticated &&
        dispatch(getPlaylistTracks(playlist[0].id))
    }, [playlist, playlistTracks])

    useEffect(() => {
        if (playlistTracks?.tracks) {
            setData({ name: playlistTracks.name, tracks: playlistTracks.tracks, i: 0})
        }
    }, [playlistTracks])


    return (

        isAuthenticated ? (
            <Div>

                <div className='contenedor'>

                    <div className=" bg-dark mw-100 pt-2 pb-1  container-fluid oki" >

                        <div className="row g-0 container-fluid">
                            <div className="col-md-4 container-fluid">
                                <img src={user.picture} className="img-thumbnail bg-dark pancho " alt="..." />


                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <br />
                                    <p className="card-text p-0"> Crea tu Playlist</p>
                                    <h1 className="card-title display-1 p-0 m-0 name">{user.name}</h1>

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
                <div className=' p-0 m-0 d-flex justify-content-center container-fluid'>
                    <p className='container'>Busca tu cancion favorita y agregala a tu lista </p>
                    
                </div>

                {/* PLAYLIST */}
            


                <div className='contenedordos'>
                    <ol className="list-group list-group-numbered container-fluid ">
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src="" alt="" />
                            <div className=" ms-4 me-auto">
                                {playlistTracks?.tracks?.map(el => (

                                    <li className=" ms-0 list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                                        <img onClick={() => handleClick(playlistTracks.tracks.indexOf(el))} className='fotico ms-2' src={play} alt="play" />

                                        <div className=" ms-4 me-auto">
                                            <div className="fw-bold">{el.name} </div>
                                        </div>
                                        <button onClick={() => deleteTrack(el.id)}> Eliminar de favoritos </button>
                                        {/* <div className='fw-bold'> {convertidor(el.duration)} </div> */}
                                    </li>

                                ))}
                            </div>
                        </li>
                    </ol>
                </div>

            </Div>
         ) : <span> Ni IDEA</span>
    )
}

export default PlayList

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
    width: 50px;
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
    margin-left: auto;
    color: white;
    display: flex;
    position: relative;
}


.contenedordos{
    width: auto;
    height: 100vh;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    margin-left: auto;
    color: white;
    display: flex;
    position: relative;

}


`

