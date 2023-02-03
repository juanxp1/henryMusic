import React from 'react'
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Pasarela from './Pasarela/Payment'
import Us from './About us/Us'
import Footer from './Footer/Footer'





function Landing() {
    return (
        <div >

            <Nav />
            <Premium />
            <Pasarela />
            <Us />
            <Footer />
        </div>
    )
}

export default Landing