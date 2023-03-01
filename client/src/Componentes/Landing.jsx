import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Us from './About us/Us'
import Footer from './Footer/Footer'
import Pagos from './Pagos/Pagos';
<<<<<<< HEAD
// import { DiscussionEmbed, Recommendations } from 'disqus-react';
import { Button } from 'bootstrap';
import { height } from '@mui/system';
=======
import { DiscussionEmbed, Recommendations } from 'disqus-react';
import Colpse from '../Componentes/Comentarios/Colapse'
>>>>>>> 0f73aa182a8a792aa4ba87db34d0dc5854a42de3

function Landing() {
    // const { getAccessTokenSilently } = useAuth0();

    return (
        <div style={{ background: "black" }}>
            <Nav />
            <Premium />
            <Pagos></Pagos>
            <Us />
            <div className='container '>
<<<<<<< HEAD
                
=======
                <Colpse />
>>>>>>> 0f73aa182a8a792aa4ba87db34d0dc5854a42de3
            </div>
            <Footer />

           
        </div>
    )
}

export default Landing
