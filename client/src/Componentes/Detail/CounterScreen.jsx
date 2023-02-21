import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from "react-router-dom"
import { getUser} from "../../Actions/actions";

export default function CounterScreen({track}) {

  const [click, setClick] = useState(false);
  const infoUser = useSelector(state => state.user.userInfo)
  const dispatch = useDispatch()
  const {user, isAuthenticated} = useAuth0()

  const [likedSong, setLikedSong] = useState(
  window.localStorage.getItem(`${infoUser?.nickname} liked songs`)
  );

  const setLocalStorage = (value) => {
    try {
      setLikedSong(value)
      window.localStorage.setItem(`${infoUser?.nickname} liked songs`, value)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(isAuthenticated) {
      dispatch(getUser(user))
    }
  }, [isAuthenticated])

  const ChangeClick = () => {
    setClick(!click);
    if(!click){
      setLocalStorage(track)
      console.log(likedSong)
    }
  };


  return (
    <div onClick={() => ChangeClick()}>
      {click ? <FcLike /> : <FcLikePlaceholder />}
    </div>
  );
}
