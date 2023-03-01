import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';





function Logout() {
    const { logout } = useAuth0();

    return (
        
        <Button type="button" style={{background:"#ffff01"}} className="btn btn-warning" onClick={() => logout()}>
            Logout
        </Button>
    );

}

export default Logout

