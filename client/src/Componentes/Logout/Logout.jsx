import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
    const { logout } = useAuth0();

    return (
        <button type="button" style={{ backgroundColor: "#FFFF01", color: "black"}} className="btn" onClick={() => logout()}>
            Logout
        </button>
    );
}

export default Logout