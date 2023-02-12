import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './Logout.css'


function Logout() {
    const { logout } = useAuth0();

    return (
       
        <><button type="button" className="btn editprofile" >
            Editar Perfil
        </button><button type="button" className="btn logout" onClick={() => logout()}>
                Logout
            </button></>
    );

}

export default Logout