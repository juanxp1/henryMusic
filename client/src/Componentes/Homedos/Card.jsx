import React from "react";
import styled from "styled-components";


export default function Card({ name, image, id, genre }) {
  return (

    <Div className="" id={id}>

      <div class="cards">
        <div class="card_image"> <img src={image} /> </div>
        <div class="card_title">
          <p className="mt-4">{name}</p>
        </div>
      </div>

    </Div>
  )
}

const Div = styled.div`

/* img {
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  max-height: 300px;
  border-radius: 10px;
} */




.cards {
  margin: 30px auto;
  width: 200px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
-webkit-box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
-moz-box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
  cursor: pointer;
  transition: 0.1s;
}

.cards .card_image {
  width: inherit;
  height: inherit;
  border-radius: 10px;
}

.cards .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 10px;
  object-fit: cover;
  opacity: 1;
}

.card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-weight: bold;
  font-size: 20px;
  margin-top: -80px;
  height: 20px;
 color: white;
}



.cards:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
-webkit-box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
-moz-box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
}



.title-black {
  color: black;
}



`