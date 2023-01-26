import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button';


const Login = () => {

    const { loginWithRedirect } = useAuth0()
    return (


        <Button type="button" class="btn btn-primary" onClick={() => loginWithRedirect()}>Login</Button>


    )
}

export default Login;