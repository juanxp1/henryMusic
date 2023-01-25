import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


function Landing() {

    const { loginWithRedirect } = useAuth0()
    return (
        <div>
            <h1>Landing</h1>
            <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
    )
}

export default Landing