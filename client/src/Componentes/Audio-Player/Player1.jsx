import React from "react";
import Player from "@madzadev/audio-player";

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
        <div>
         <Player 
         trackList={tracks}
         includeTags={false}
         includeSearch={false}
         showPlaylist={true}
         autoPlayNextTrack={true}
         customColorScheme={colors}
         />
        </div>
    );
}

const colors = `html {
          --tagsBackground: #ffe433;
          --tagsText: #ffe433;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffe433;
          --searchBackground: #18191f;
          --searchText: #ffe433;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #ffe433; 
          --timeColor: #ffe433;
          --progressSlider: #ffe433;
          --progressUsed: #ffe433;
          --progressLeft: #151616;
          --volumeSlider: #ffe433;
          --volumeUsed: #ffe433;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffe433;
      }`;