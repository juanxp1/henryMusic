import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'



function Login() {

    const { loginWithRedirect } = useAuth0()
    return (
        <div className="container text-center">
            <div className="row">
                <button type="button" class="btn btn-primary" onClick={() => loginWithRedirect()}>REGISTRATE</button>
            </div>
        </div>
    )
}

export default Login