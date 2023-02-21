import React from 'react'
import styled from "styled-components";

import {Link} from "react-router-dom"

export default function Error() {
  return (
    <Contenedor>
         <h1> 404 Not found </h1>
    <div>
    <Link to={"/home"}>
     
      <button type="button" className="btn btn-warning"> 
      Go Home</button>
     </Link>
    </div>
    </Contenedor>
  )
}
const Contenedor = styled.div`
background: black;
color: white;
text-align: center;


`




