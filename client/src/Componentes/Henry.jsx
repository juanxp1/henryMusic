import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

function Card() {

    const { user } = useAuth0()
    return (

        <Div>
            <h1>Bienvenido &nbsp;<span>{user.nickname}</span></h1>
        </Div>

    )
}

export default Card

const Div = styled.div`

height: 200vh;
background: rgb(194,194,45);
background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);


h1 {
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: #cfcece;
}

span{
    text-decoration: underline;
    text-decoration-color: rgb(194,194,45);
}
`