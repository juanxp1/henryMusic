import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'react-bootstrap';


function Login() {

    const { loginWithRedirect } = useAuth0()
    return (
        <div className="container text-center">
            <div className="row">
                <button type="button" class="btn btn-dark" onClick={() => loginWithRedirect()}>Login</button>
            </div>
        </div>
    )
}

export default Login