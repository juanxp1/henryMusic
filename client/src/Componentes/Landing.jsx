import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Us from './About us/Us'
import Footer from './Footer/Footer'
import Pagos from '../Componentes/Pagos/Pagos'

//import Colpse from '../Componentes/Comentarios/Colapse'

function Landing() {

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
