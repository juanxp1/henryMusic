import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Us from './About us/Us'
import Footer from './Footer/Footer'
import Pagos from './Pagos/Pagos';
import { useAuth0 } from '@auth0/auth0-react';


function Landing() {
    const { getAccessTokenSilently } = useAuth0();

    // Actualizar el token en el local storage
    useEffect(() => {
        const updateToken = async () => {
            const token = await getAccessTokenSilently();
            window.localStorage.setItem('token', token);
        };
        updateToken();
    }, []);

    return (
        <div style={{ background: "black" }}>
            <Nav />
            <Premium />
            <Pagos />
            <Us />
            <Footer />
        </div>
    )
}

export default Landing
