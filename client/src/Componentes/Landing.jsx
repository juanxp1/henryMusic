import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Us from './About us/Us'
import Footer from './Footer/Footer'
import Pagos from './Pagos/Pagos';
import { DiscussionEmbed, Recommendations } from 'disqus-react';

function Landing() {
    // const { getAccessTokenSilently } = useAuth0();

    return (
        <div style={{ background: "black" }}>
            <Nav />
            <Premium />
            <Pagos></Pagos>
            <Us />
            <Footer />
            {/* <DiscussionEmbed></DiscussionEmbed> */}
           <Recommendations></Recommendations>
        </div>
    )
}

export default Landing
