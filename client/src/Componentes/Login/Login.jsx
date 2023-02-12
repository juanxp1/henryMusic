import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';


const Login = () => {

    const { loginWithRedirect } = useAuth0()
    return (
        <Div>
            <Button id='login' style={{ backgroundColor: "#FFFF01", color: "black"}} type="button" className="btn" onClick={() => loginWithRedirect()}>Login</Button>
        </Div>
    )
}

export default Login;

const Div = styled.div`
button {
    background-color: #FFFF01
}

`