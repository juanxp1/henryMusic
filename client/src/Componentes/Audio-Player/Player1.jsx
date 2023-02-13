import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTracks } from "../../Actions/actions";





export default function Player1(tracks) {

  // const dispatch = useDispatch();
  // const tracksDB = useSelector(state);
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState({
    index: 0,
    url: '',
  });

  let arr = [];

  console.log(tracks)

  // const arr = [];

  // useEffect(() => {
  //   dispatch(action())
  // }, [])

  // useEffect(() => {
  //   if(tracksDB.tracks?.length) {
  //     for(let i = 0; i < tracksDB.tracks.length; i++) {
  //       arr.push('https://henrymusic.tech/tracks/' + tracksDB.tracks[i].id + '.mp3')
  //     }
  //     setSongs(arr)
  //   } 
  // }, [tracksDB])

  useEffect(() => {
    tracks.tracks.map(el=> arr.push(el.play_url))
  }, [arr])

  useEffect(() => {
    setCurrentSong({index: 0, url: arr[currentSong.index]})
  }, [tracks])


  return (

    <Container className="container-fluid d-flex justify-content-around">
      <AudioPlayer
        src={currentSong.url}
        controls
        autoPlay={false}
        onClickNext={() => setCurrentSong({index: currentSong.index == arr.length-1 ? currentSong.index : currentSong.index + 1, url: currentSong.index == arr.length-1 ? currentSong.url : arr[currentSong.index+1]})}
        onClickPrevious={() => setCurrentSong({index: currentSong.index == 0 ? currentSong.index : currentSong.index - 1, url: currentSong.index == 0 ? currentSong.url : arr[currentSong.index-1]})}
        className="repro p-0 m-0 "
        showSkipControls
        volumeJumpStep
        showFilledProgress
        header
     
    
   
       


      />
    </Container>

  );
}

const Container = styled.div`
.repro {
  background-color: #000000;
  width: 120vh;
  height: auto;
  opacity: 1;
}

margin: 0px;
background-color: #000000;

`

 // lISTA DE COMANDOS QUE SE PUEDE PONER AL REPRODUCTOR 

// showSkipControls	boolean	false	Show Previous/Next buttons
// showJumpControls	boolean	true	Show Rewind/Forward buttons
// showDownloadProgress	boolean	true	Show download progress over progress bar
// showFilledProgress	boolean	true	Show filled (already played) area on progress bar
// volumeJumpStep	number	0.1	Indicates the volume jump step when pressing up/down arrow key, volume range is 0 to 1
// progressJumpStep	number	5000	Indicates the progress jump step (ms) when clicking rewind/forward button or left/right arrow key
// progressUpdateInterval	number	20	Indicates the interval (ms) that the progress bar UI updates,
// listenInterval	number	1000	Indicates the interval (ms) to call the onListened prop during playback
// defaultCurrentTime	ReactNode	'--:--'	Default display for audio's current time before src's meta data is loaded
// defaultDuration	ReactNode	'--:--'	Default display for audio's duration before src's meta data is loaded
// header	ReactNode	null	Header of the audio player
// footer	ReactNode	null	Footer of the audio player
// layout	'stacked' | 'horizontal' |
// 'stacked-reverse' |
// 'horizontal-reverse'	'stacked'	Overall layout of the audio player
// customIcons	CustomIcons	{}	Custom icons to replace the default ones
// customProgressBarSection	Array<string |
// ReactElement>	[CURRENT_TIME,
// PROGRESS_BAR,
// DURATION]	Custom layout of progress bar section
// customControlsSection	Array<string |
// ReactElement>	[ADDITIONAL_CONTROLS,
// MAIN_CONTROLS,
// VOLUME_CONTROLS]	Custom layout of controls section
// customAdditionalControls	Array<string |
// ReactElement>	[LOOP]	Custom layout of additional controls
// customVolumeControls	Array<string |
// ReactElement>	[VOLUME]	Custom layout of volume controls