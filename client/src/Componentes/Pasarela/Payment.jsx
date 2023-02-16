import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { FormControl } from "@mui/material";
import styled from 'styled-components'
import visa from '../Pasarela/visa.png';
import master from '../Pasarela/master.png';
import paypal from '../Pasarela/paypal.png';
import mercadopago from '../Pasarela/mercadopago.png';
import Registro from "../Registro/Registro";


function Payment() {
    const [amount, setAmount] = useState(0);

    console.log("holisssssssssssssssssss", amount)
    const handleToken = (token) => {

        fetch("http://localhost:3001/precio/checkout", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, amount }),
        })
            .then(res => res.json())
            .then(_ => {
                window.alert("Transaction Successful.");
            }).catch(_ =>   window.alert("Pago exitoso.")
              
            )
    }



    return (

        <Container className="payment container-fluid " id="premium">
            <h1 className='text-center '>¡No esperes más y adquiere hoy tu plan premium!</h1>
            <p className="parrafo text-muted"> Escuchá contenido sin límites en tu celular, parlante y otros dispositivos.</p>

            <img src={visa} alt="visa" />
            <img src={master} alt="master" />
            <img src={paypal} alt="paypal" />
            <img src={mercadopago} alt="mercadopago" />

            <br />

            <div className=" container card-group">

                <div className="card">
                    <FormControl sx={{ n: 1 }} >

                        <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
                        <br />
                        <h2>Individual</h2>
                        <h3 className="text-center ">$ 100,00*** al mes después del período de la oferta 1 cuenta</h3>
                    </FormControl>
                    <div>

                        <StripeCheckout
                            stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                            token={handleToken}
                            name="Henry Music"
                            panelLabel={`Suscription`}
                            amount={10000}
                            currency="USD"
                            image='http://localhost:3000/static/media/logosin.12495e56.png'
                        >

                        </StripeCheckout>
                        <Registro></Registro>


                        <p className="card-text text-muted">*** Después, solo cuesta $ 100,00 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>
                        {/* <Link to="/home" className='premium'> <button onClick={Payment} className="btn btn-warning">Elige tu plan</button></Link>  */}
                        {/* <Registro></Registro> */}
                    </div>
                </div>


                <div className="card">
                    <FormControl sx={{ n: 1 }}>
                        <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
                        <br />
                        <h2>Duo</h2>
                        <h3 className="text-center">$ 150,00*** al mes después del período de la oferta 2 cuentas</h3>
                    </FormControl>

                    <div>

                        <StripeCheckout

                            stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                            token={handleToken}
                            name="Henry Music"
                            image='http://localhost:3000/static/media/logosin.12495e56.png'
                            panelLabel={`Suscription`}
                            currency="USD"
                            amount={15000}
                        >
                        </StripeCheckout>
                        <Registro></Registro>
                        <p className="card-text text-muted">*** Después, solo cuesta $ 549,00 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>
                    </div>
                </div>

                <div className="card">
                    <FormControl sx={{ n: 1 }}>
                        <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
                        <br />
                        <h2>Estudiantes</h2>
                        <h3 className="text-center">$ 80,00**** al mes después del período de la oferta 1 cuenta</h3>

                    </FormControl>
                    <div className="boton">

                        <StripeCheckout
                            stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                            token={handleToken}
                            name="HenryMusic"
                            image='http://localhost:3000/static/media/logosin.12495e56.png'
                            panelLabel={`Suscription`}
                            currency="USD"
                            amount={8000}
                        >
                        </StripeCheckout>
                        <Registro></Registro>
                        <p className="card-text text-muted">*** Después, solo cuesta $ 549,00 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>

                    </div>
                </div>

            </div>
            <br />

        </Container>

    )

}

export default Payment;

const Container = styled.div`


img{
    width: 33px;
    margin:10px;
    margin-top: 0px;
    padding-top: 0px;
}




background: rgb(255,255,1);
background: linear-gradient(0deg, rgba(255,255,1,1) 0%, rgba(0,0,0,1) 81%);

background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(255,255,0,1) 43%, rgba(0,0,0,1) 85%);

text-align: center;



h3 {
    font-size: 20px;
    color:whitesmoke; 
}



h1 {
  
    color:whitesmoke; 
    font-weight: 600;
    padding-top: 20px;
}

.payment {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
   
    
}

h2 {
    color: whitesmoke;
  
}

.card{

    background-color: black;
    color: whitesmoke;  
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #000000;
    margin: 10px;

   
}

.card:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 0.3s;
}

.parrafo{
    margin-top: 20px;
    color: whitesmoke;
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;

}


.card-text{
    font-size: 13px;
    padding: 5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 15px;


}

.boton { 
   
}


`


