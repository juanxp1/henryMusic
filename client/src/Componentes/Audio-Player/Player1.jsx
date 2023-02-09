import React from "react";

import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player';

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
  return (

    <Container>

      <ReactAudioPlayer
        src={tracks}
        autoPlay
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
