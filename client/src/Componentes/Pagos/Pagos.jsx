import React, { useState, useEffect, createElement } from "react";
import ReactDOM from "react-dom"
import styled from 'styled-components'
import abigail from './henryMusic.jpg'
import videoabi from './abi.mp4'



export default function Pagos() {
  return (
    <Container className="container-fluid" >
      <div className="w-100 container-fluid d-flex justify-content-center">
        <img className="img-fluid"  loop autoPlay src={abigail} alt="First slide" />
      </div>
    </Container>

  );
}

const Container = styled.div`


img{
   width: 900px;
  height: 500px;
 
 }


 `


