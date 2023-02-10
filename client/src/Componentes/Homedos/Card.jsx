import React from "react";
import styled from "styled-components";

export default function Card({ name, image, id, genre }) {
    return (

        <Div className=" card bg-dark text-white card-body">
            <img key={id} src={image} className="card-img float-end oli " alt={name} />
            <div className="card-img-overlay ">
                <div className=" text-light">
                    <h4 className="card-title olidos">{name}</h4>
                    <p className="card-text">{genre}</p>
                </div>

            </div>
        </Div>
    )
}

const Div = styled.div`

img {
    height: 200px;
    max-height: 200px;
    border: none;
border-radius: 10px;
    

}



padding: 0px;
margin: 0px;


.olidos{
 color: #ffffff;
 font-weight: 500;
 font-size: 30px;
 text-decoration: underline 2px solid #FFFF01;
}


`