import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Us from './About us/Us'
import Footer from './Footer/Footer'
import Pagos from './Pagos/Pagos';
import { DiscussionEmbed, Recommendations } from 'disqus-react';
import { Button } from 'bootstrap';

function Landing() {
    // const { getAccessTokenSilently } = useAuth0();

    return (
        <div style={{ background: "black" }}>
            <Nav />
            <Premium />
            <Pagos></Pagos>
            <Us />
            <div className='container h-auto'>
                <DiscussionEmbed />
                <Recommendations />
            </div>
            <Footer />

        </div>
    )
}

export default Landing
