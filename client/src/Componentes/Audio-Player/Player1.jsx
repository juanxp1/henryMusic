import React from "react";

import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTracks } from "../../Actions/actions";

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Caramelo Dj - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Erick Dj - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "AbiMex Dj- Persistence",
    tags: ["dubstep"],
  },
];



export default function Player1() {

  const dispatch = useDispatch();
  const tracksDB = useSelector(state => state.tracks);
  const [validate, setValidate] = useState('');

  useEffect(() => {
    dispatch(getAllTracks(100))
  }, [])

  useEffect(() => {
    tracksDB.tracks?.length && 
    setValidate('https://henrymusic.tech/tracks/' + tracksDB.tracks[0].id + '.mp3')
  }, [tracksDB])

  console.log(tracksDB.tracks, validate)

  return (

    <Container>

      <ReactAudioPlayer
        src={validate}
        controls
        className="repro"
   


      />
    </Container>

  );
}

const Container = styled.div`
.repro {
  background-color: #000000;
  width: 150vh;
}


`
