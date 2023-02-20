import React from "react"
import styled from 'styled-components';

function Boton({texto, esBotonDeClic, manejarClic}){
    return(
        <Contador>
        <button
        className={esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
        onClick={manejarClic}>
            {texto}
        </button>
        </Contador>
    )
}
export default Boton;

const Contador = styled.div`
button{
    width: 250px;
    height: 80px;
    font-family: Roboto, sans-serif;
    font-size: 35px;
    font-weight: bold;
    color: white;
    border: 2px solid white;
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
    /* con el valor pointer en lugar de una flecha se coloca una manito */

}
button:hover{
    background-color: aqua;
}
.boton-clic{
    background-color: #002aed;
}
.boton-reiniciar{
    background-color: #5a01a7;
}



`