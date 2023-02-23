import React from "react";
import styled from "styled-components";



export default function Card({ name, image, id, genre }) {
  return (

    <Div id={id}>
      {/* <div className="cards">
        <div className="card_image"> <img src={image} /> </div>
        <div className="card_title">
          <p className="mt-4">{name}</p>
        </div>
      </div> */}

      {/* cartas opcion 2 */}
      <div className="profile">
        <div className="profile-image">
          <img src={image} />
        </div>
        <h2 className="profile-username">{name}</h2>
        <p className="fst-italic text-warning">@{genre}</p>
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
}  */



/* 
.cards {
  margin: 30px auto;
  width: 250px;
  height: 250px;
  border-radius: 0px;
  cursor: pointer;
  transition: 0.1s;
  box-shadow: 8px 7px 5px 0px rgba(255,255,1,0.75);
-webkit-box-shadow: 7px 7px 5px 0px rgba(255,255,1,0.75);
-moz-box-shadow: 8px 7px 5px 0px rgba(255,255,1,0.75);

}

.cards .card_image {
  width: inherit;
  height: inherit;
  border-radius: 0px;
}

.cards .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 5px;
  object-fit: cover;
}

.card_title {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: -80px;
  height: auto;
  
}

.cards:hover {
  transform: scale(0.9, 0.9);
} */


 /* cartas opcion 2 */



/* Some basic CSS overrides */




/* End basic CSS override */

height: auto;

.profile {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 3rem;
  padding-top: 20px;
	width: 90%;
	max-width: 300px;
  max-height: 350px;
  min-height: 350px;
  /* background-image: linear-gradient(
  140deg,
  hsl(0deg 0% 0%) 0%,
  hsl(339deg 0% 0%) 29%,
  hsl(339deg 0% 0%) 43%,
  hsl(137deg 0% 4%) 57%,
  hsl(137deg 0% 7%) 71%,
  hsl(0deg 0% 0%) 100%
); */
	border-radius: 16px;
	text-align: center;
	color: #f1f3f3;
  margin-bottom: 0;
  padding-bottom: 0;

}

.profile-image {
	border-radius: 50%;
	overflow: hidden;
	width: 200px;
	height: 200px;
	position: relative;
	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
    opacity: 0.9;
	}
}

.profile-username {
	font-size: 1.5rem;
	font-weight: 600;
	margin-top: 10px;
}


 

`