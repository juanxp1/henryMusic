import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
//mport Fav from "../Detail/CounterScreen"
//import Detail from '../Detail/Detail';
import { FcLike } from "react-icons/fc";
import { getArtist } from '../../Actions/actions';



export default function Fav() {
    const { user, isAuthenticated} = useAuth0();
   
  return (

<div>
    <h1>
    <FcLike/> Tus me gusta  bb{" "}
    <span>{user?.nickname.toUpperCase()}</span>
    </h1>

    </div>

  )
}
