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
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
-webkit-box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
-moz-box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
  cursor: pointer;
  transition: 0.1s;
}

.cards .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.cards .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.cards .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
  
}



.cards:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
-webkit-box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
-moz-box-shadow: 7px 7px 5px -4px rgba(255,255,1,0.75);
}

.title-white {
  box-shadow: 7px 7px 5px -4px rgba(255, 255, 255, 0.75);
-webkit-box-shadow: 7px 7px 5px -4px rgba(255, 255, 255, 0.75);
-moz-box-shadow: 7px 7px 5px -4px rgba(0, 0, 0, 0.75);

}

.title-black {
  color: black;
}


@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}


`