import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { FormControl } from "@mui/material";
import styled from 'styled-components'



function Payment() {
    const [amount, setAmount] = useState(0);

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
            }).catch(_ => window.alert("Transaccion Exitosa.")
            )
    }


    return (

        <Container className="payment container-fluid">
            <h1 className='text-center'>Elegí tu plan Premium</h1>
            <br />

            <div className="card-group">
                <div className="card">
                    <FormControl sx={{ n: 1 }} >
                        <img
                            src='https://i.pinimg.com/564x/06/f9/6f/06f96f2944fcfabe3a291a1060441511.jpg'
                            className="rounded mx-auto d-block" alt="k68 keyboard" width="200px" justifyContent="center"
                        />

                        <h3 className="text-center">Premium: $100</h3>
                        <p className="text-center">Escucha música sin anuncios
                            Reproduce tus canciones en cualquier lugar, incluso en modo offline
                            Reproduce contenido on-demand
                            Elige la opción prepaga o suscríbete.</p>

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
                    </div>
                </div>

                <div className="card">
                    <FormControl sx={{ n: 1 }}>

                        <img
                            src='https://i.pinimg.com/564x/db/e0/de/dbe0de3fdb7c7e963c9befc19f10f816.jpg'
                            className="rounded mx-auto d-block" alt="k68 keyboard" width="200px" justifyContent="center"
                        />
                        <h3 className="text-center">Duo: $150</h3>
                        <p className="text-center">Tendras 2 cuentas Premium para parejas que conviven.
                            Reproducción de música sin anuncios, en modo offline y on demand

                            Elige la opción prepaga o suscríbete.</p>


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
                    </div>
                </div>

                <div className="card">
                    <FormControl sx={{ n: 1 }}>
                        <img
                            src='https://i.pinimg.com/564x/71/3d/f5/713df5246cec6ed1385333f547b56beb.jpg'
                            className="rounded mx-auto d-block" alt="k68 keyboard" width="200px" justifyContent="center"
                        />
                        <h3 className="text-center">Estudiante: $80</h3>
                        <p className="text-center">Descuento especial para estudiantes universitarios que cumplan con los requisitos.
                            Escucha tu música.
                            Reproduce tus canciones favoritas, incluso en modo offline.</p>

                    </FormControl>
                    <div>
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
                    </div>
                </div>

            </div>

        </Container>

    )

}

export default Payment;

const Container = styled.div`


background-image: linear-gradient(270deg, #ffa3ff 0, #ff9cff 3.33%, #ff97fe 6.67%, #ff97e5 10%, #ff99cc 13.33%, #ff9fb3 16.67%, #ffa79c 20%, #ffb185 23.33%, #ffbb6f 26.67%, #ffc65a 30%, #ffd145 33.33%, #ffdc30 36.67%, #ffe619 40%, #ffef00 43.33%, #fff700 46.67%, #ffff00 50%, #e6ff20 53.33%, #cbff38 56.67%, #adff4f 60%, #8aff66 63.33%, #5bff7d 66.67%, #00ff96 70%, #00ffaf 73.33%, #00ffc9 76.67%, #00ffe3 80%, #00fffd 83.33%, #00ffff 86.67%, #00ffff 90%, #00ffff 93.33%, #00ffff 96.67%, #00ffff 100%);

color: #000000;
padding: 20px;
padding-bottom: 0px;
padding-left: 0px;
padding-right: 0px;
text-align: center;


h3 {
    font-size: 20px
}



h1 {
    color: #000000
}

.payment {
    display: flex;
    flex-direction: column;

}



.card{
    background-color: black;
    color: white;
}

`


