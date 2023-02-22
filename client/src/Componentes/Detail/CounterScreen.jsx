import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

import { useDispatch, useSelector } from "react-redux";
import {useLocation} from "react-router-dom"
import { getAllPlaylists, getPlaylistTracks, getUser, playlistAddTrack} from "../../Actions/actions";

export default function CounterScreen({track}) {

  const [click, setClick] = useState(false);
  const playlist = useSelector(state => state.playlists)
  const dispatch = useDispatch()
  const {user, isAuthenticated} = useAuth0()


  useEffect(() => {
    if(isAuthenticated) {
      dispatch(getUser(user))
      dispatch(getAllPlaylists())
    }
  }, [isAuthenticated])

  const ChangeClick = () => {
    setClick(!click);
    dispatch(playlistAddTrack(playlist[0].id, track.id))
    dispatch(getPlaylistTracks(playlist[0].id))
    console.log(playlist)
  };

  return (
    <div onClick={() => ChangeClick()}>
      {click ? <FcLike /> : <FcLikePlaceholder />}
    </div>
  );
}
