import React from 'react'
import video from '../../Fotos/publi.mp4'

function Video() {
  return (
    <div><video src={video} controls autoPlay></video></div>
  )
}

export default Video