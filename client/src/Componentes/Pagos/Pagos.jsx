import React, { useState, useEffect, createElement } from "react";
import ReactDOM from "react-dom"
import styled from 'styled-components'
import visa from '../Pagos/visa.png'
import master from '../Pagos/master.png'
import paypal from '../Pagos/paypal.png'
import { useAuth0 } from '@auth0/auth0-react'
import Publicidad from '../publicidad/Video'

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Pagos() {

  const [price, setPrice] = useState(0);
  const [opcion, setOpcion] = useState(5);



  useEffect(() => {
    {
      if (opcion)
        setPrice(opcion);
    }
  }, [opcion]);


  const { isAuthenticated } = useAuth0();

  const createOrder = (data, actions) => {
    console.log(actions.order, "probandoo")
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  };


  const onApprove = (data, actions) => {
    console.log(actions, "aveeeqalora")
    return actions.order.capture(window.alert("Transaccion Exitosa."));
  };




  const alert = () => {
    return window.alert("Registrate para continuar")
  }

  const handleCambio = (e) => {
    setOpcion(e.target.value)
  }



  return (
    <Container className="payment container-fluid" id="premium">

      {/* {actions ? <h1>Bienvenido a tu cuenta Premium</h1> : <Publicidad />} */}
    {/* <Publicidad /> */}


      <h1 className='text-center pt-5'>¡No esperes mas y adquiere hoy tu plan Premium!</h1>
      <h2 className='text-center Music'>ᴺᴼᵂ ᴾᴸᴬᵞᴵᴺᴳ♫♬♪</h2>
      <p className="parrafo text-center"> Escuchá contenido sin límites en tu celular, parlante y otros dispositivos.</p>
      <img src={visa} alt="visa" />
      <img src={master} alt="master" />
      <img src={paypal} alt="paypal" />


      <div className=" container-fluid m-0 p-0 ">
        <div className="container card-group">
          <div className="card">
            <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
            <br />
            <h2>Estudiante Premium ♫</h2>
            <h3 class="card-title"> US$ 5*** al mes después del período de la oferta 1 cuenta</h3>
            <p class="card-text  text-muted">*** Después, solo cuesta  US$ 5 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>
          </div>

          <div className="card ">
            <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
            <br />
            <h2>Individual Premium ♫</h2>
            <h3 class="card-title"> US$ 8*** al mes después del período de la oferta 2 cuentas</h3>
            <p className="card-text text-muted">*** Después, solo cuesta  US$ 8 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>
          </div>

          <div className="card ">
            <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
            <br />
            <h2>Duo Premium ♫</h2>
            <h3 class="card-title"> US$ 10*** al mes después del período de la oferta 1 cuenta</h3>
            <p className="card-text text-muted">*** Después, solo cuesta  US$ 10 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>
          </div>
        </div>
      </div>

      {isAuthenticated ?
        <div className=' wrapper d-flex aling-items-center justify-content-center w-100'>
          <div className="card mb-2">
            <h2>Elige tu plan Premium por US$ {price}</h2>
            <select className="select" value={opcion} onChange={handleCambio}>
              <option className="option text-center" value="5"> PLan Estudiante Cinco Dolares</option>
              <option className="option text-center" value="8"> Plan Individual Ocho Dolares</option>
              <option className="option text-center" value="10">Plan Duo Diez Dolares</option>
            </select>
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />

            <hr />
          </div>
        </div> : <button onClick={alert} className="btn bg-dark"><h2>Realizar Compra</h2></button>}
    </Container>
  );
}



const Container = styled.div`

.Music {
  color: #ffff01
}

img{
    width: 33px;
    margin:10px;
    margin-top: 0px;
    padding-top: 0px;
}

.select{
  background-color: black;
  color:whitesmoke; 
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 10px;
}

.option{
  color:whitesmoke; 
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 20px;

}


background: rgb(255,255,1);
background: linear-gradient(0deg, rgba(255,255,1,1) 0%, rgba(0,0,0,1) 81%);

background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(255,255,0,1) 43%, rgba(0,0,0,1) 85%);

text-align: center;
height: auto;


h3 {
    font-size: 20px;
    color:whitesmoke; 
}



h1 {
  
    color:whitesmoke; 
    font-weight: 600;

}

  .payment {
    display: flex;
    flex-direction: column;
    
}
  


h2 {
    color: whitesmoke;
  
}

.card{

  background-color: #000000;

  color: whitesmoke;  
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #ffffff;
   margin: 10px;
  
    // margin:10px;
    // display: flex;
    // flex-direction: column;
    // border-radius: 10px;
    // padding-top:10px;
  
}

.card:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 0.3s;
}

.parrafo{
  padding-top: 30px;
    color:whitesmoke;
    font-size: 20px;
}


.card-text{
  padding-top: 100px;
    font-size: 13px;
    padding: 5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 15px;


}




`


