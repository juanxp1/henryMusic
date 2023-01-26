import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
    const { logout } = useAuth0();

    return (
        <button type="button" className="btn btn-primary" onClick={() => logout()}>
            Logout
        </button>
    );
}

export default Logout