import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Landing } from '../../Actions/actions';
import styled from 'styled-components';


function Detail() {

    const dispatch = useDispatch()

    useEffect(() => dispatch(Landing()), [])


    return (
        <>
            <Container>
                <div className='contenedor'>
                    <h1>detalles</h1>
                    <button><a href="/home"><h1>Regresar</h1></a></button>
                </div>
            </Container>
        </>

    )
}

export default Detail

const Container = styled.div`

*{
    margin: auto;
    padding: auto;
    color: white;
}


.contenedor{
    width: auto;
    height: 100vh;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    margin-left: 230px  !important;
    color: white;
    display: flex;
position: relative;
}

`