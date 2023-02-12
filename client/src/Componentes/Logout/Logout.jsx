import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './Logout.css'


function Logout() {
    const { logout } = useAuth0();

    return (
<<<<<<< HEAD
        <button type="button" style={{ backgroundColor: "#FFFF01", color: "black"}} className="btn" onClick={() => logout()}>
            Logout
        </button>
=======
       
        <><button type="button" className="btn editprofile" >
            Editar Perfil
        </button><button type="button" className="btn logout" onClick={() => logout()}>
                Logout
            </button></>
>>>>>>> b29c4c034ba26fd0fc594d9c3137e116d1450ab7
    );

}

export default Logout