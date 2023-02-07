import React from "react";

import styled from "styled-components";


export default function Card({ name, image, album, id, country, year, genre }) {
    return (
        <Container  >
            <div className="card oli" >
                <div className="card bg-dark">
                    <img key={id} src={image} className="card-img-top rounded mx-auto d-block pt-2" alt={name} />
                    <div className="card-body">
                        <h4 className="text-center">{name}</h4>
                        <h5 className="text-center">{album}</h5>
                        <h6 className="text-center">{genre}</h6>
                        <h6 className="text-center">{year}</h6>
                        <h1 className="text-center">{country}</h1>

                    </div>

                </div>

            </div>
        </Container>
    )
}

const Container = styled.div`


 .oli {
    width: 250px;
min-width: 200px;
max-width: auto;
   
 }
 
 .oli:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 0.3s;
   
}

img {
    width: 180px;
}
`