import React from 'react'
import NavHome from './NavHome/NavHome'
import Navertical from '../Componentes/Nav-Vertical/Navertical'
import Player1 from './Audio-Player/Player1'
import styled from 'styled-components'





function Home() {
    return (

        <>
            <NavHome />
            <Navertical />
            <Div className='fixed-bottom w-100 d-flex justify-content-center'>
                <Player1 />
            </Div>
           
        </>

    )

}

export default Home

const Div = styled.div`

background-color: black;
min-width: auto;
width: auto;

`



