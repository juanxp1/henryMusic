import React from "react";


import styled from "styled-components";

export default function Card({ name, image, id, genre }) {
    return (

        <Div className=" card bg-dark text-white card-body">
            <img key={id} src={image} className="card-img rounded float-end oli" alt={name} />
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
    border: 1px solid #000000;
}

img {
    opacity: 0.8;
}


padding: 0px;
margin: 0px;


.olidos{
 color: #ffffff;
 font-weight: 400;
 text-decoration: underline 1px solid #FFFF01;
}


`