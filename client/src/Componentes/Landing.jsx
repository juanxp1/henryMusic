import React,{useEffect} from 'react'
import { useSelector } from "react-redux";
import Nav from '../Componentes/Nave/Nave'
import Premium from './Premium/Premium'
import Us from './About us/Us'
import Footer from './Footer/Footer'
import Pagos from './Pagos/Pagos';







function Landing() {

    const {login} = useSelector(state=>state)
    useEffect(()=>{

    }, [login])

    return (
        <div className='bg-dark' >

            <Nav />
            <Premium />
             {/* { !login && <Registro/>} */}
           {/* { login && <Payment/>} */}
           {/* <Payment></Payment> */}
           <Pagos></Pagos>
            <Us />  
            <Footer />
        </div>
    )
}

export default Landing