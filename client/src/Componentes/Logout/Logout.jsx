import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
    const { logout } = useAuth0();

    return (
        <button type="button" class="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>
            LOGOUT
        </button>
    );
}

export default Logout