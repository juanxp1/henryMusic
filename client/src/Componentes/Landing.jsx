import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Us from './About us/Us'
import Footer from './Footer/Footer'
import Pagos from './Pagos/Pagos';

function Landing() {
    // const { getAccessTokenSilently } = useAuth0();

    return (
        <div style={{ background: "black" }}>
            <Nav />
            <Premium />
            <Pagos></Pagos>
            <Us />
            <Footer />
        </div>
    )
}

export default Landing
