import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";


export default function CounterScreen() {
  const [click, setClick] = useState(false);


  const ChangeClick = () => {
  
    setClick(!click);
   

  };

  return (
    <div onClick={() => ChangeClick()}>
      {click ? <FcLike /> : <FcLikePlaceholder />}
    </div>
  );
}
