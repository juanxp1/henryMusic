import React from "react";
import styled from 'styled-components';

function Contador({ numClics }){
    return (
        <Contadorx>
    <div className="contador">
        {numClics}
    </div> 
    </Contadorx>
    )
}
export default Contador; 

const Contadorx = styled.div`
.contador{
    min-width: 300px;
    height: 300px;
    font-size: 160px;
    padding: 25px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px solid white;
    margin-bottom: 15px;
}

`