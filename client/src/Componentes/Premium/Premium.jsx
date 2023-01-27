import React from 'react'
import Lima from '../Premium/lima.png'
import Ilimi from '../Premium/ilimi.png'
import Fini from '../Premium/play.png'
import styled from 'styled-components'

function Premium() {
    return (
        <NavContainer>
            <br />
            <h1 className='text-center'>¿Por qué cambiarse a Premium?</h1>
            <br />
            <div className="card-group">
                <div className="card">
                    <img src={Lima} className="rounded mx-auto d-block" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">Escuchá música sin anuncios.</h4>
                        <p className="card-text">Disfruta de tu música sin interrupciones.</p>
                        <p className="card-text"><small className="text-muted"><button className='d-grid gap-2 col-6 mx-auto btn btn-warning'>👇</button></small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={Ilimi} className="rounded mx-auto d-block" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">Escuchá la canción que quieras.</h4>
                        <p className="card-text">Incluso en dispositivos móviles..</p>
                        <p className="card-text"><small className="text-muted"><button className='d-grid gap-2 col-6 mx-auto btn btn-warning'>👇</button></small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={Fini} className="rounded mx-auto d-block" alt="..." />
                    <div className="card-body">
                        <h4 class="card-title">Saltos ilimitados de canciones.</h4>
                        <p className="card-text">Solo pasa a la siguiente.</p>
                        <p className="card-text"><small className="text-muted"><button className='d-grid gap-2 col-6 mx-auto btn btn-warning'>👇</button></small></p>
                    </div>
                    <br />
                   
                </div>
            </div>
        </NavContainer>

    )
}

export default Premium

const NavContainer = styled.nav`

img{
    width: 200px;
   flex-direction: column;
  
}

.card{
    background-color: black;
    color: white;
}

.btn {
  background-color: #FFFF01;
}

h1{
    color: #000000;
}

background-image: linear-gradient(270deg, #ffa3ff 0, #ff9cff 3.33%, #ff97fe 6.67%, #ff97e5 10%, #ff99cc 13.33%, #ff9fb3 16.67%, #ffa79c 20%, #ffb185 23.33%, #ffbb6f 26.67%, #ffc65a 30%, #ffd145 33.33%, #ffdc30 36.67%, #ffe619 40%, #ffef00 43.33%, #fff700 46.67%, #ffff00 50%, #e6ff20 53.33%, #cbff38 56.67%, #adff4f 60%, #8aff66 63.33%, #5bff7d 66.67%, #00ff96 70%, #00ffaf 73.33%, #00ffc9 76.67%, #00ffe3 80%, #00fffd 83.33%, #00ffff 86.67%, #00ffff 90%, #00ffff 93.33%, #00ffff 96.67%, #00ffff 100%);

padding-top: 10px;
text-align: center;

text-align: center;


`