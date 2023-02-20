import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import {useLocation} from "react-router-dom"

export default function CounterScreen() {
  const [click, setClick] = useState(false);
  //const [, navigate]= useLocation()

  const ChangeClick = () => {
  
    setClick(!click);
   

  };

  return (
    <div onClick={() => ChangeClick()}>
      {click ? <FcLike /> : <FcLikePlaceholder />}
    </div>
  );
}
