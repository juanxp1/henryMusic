import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"
import styled from 'styled-components'
// import visa from './Paypal/visa.png'
// import master from './PayPal/master.png'
// import paypal from './PayPal/paypal.png'

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


  const createOrder = (data, actions) => {
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
    return actions.order.capture(window.alert("Transaccion Exitosa."));
  };



  const handleCambio = (e) => {
    setOpcion(e.target.value)
  }


  return (


    <Container className="payment container-fluid padding-top-50" id="premium">

      <h1 className='text-center'>¡No Esperes Mas Y Adquiere Hoy Tu Plan Premium!</h1>
      <h2 className='text-center'>ᴺᴼᵂ ᴾᴸᴬᵞᴵᴺᴳ♫♬♪</h2>
      <p className="parrafo"> Escuchá contenido sin límites en tu celular, parlante y otros dispositivos.</p>

      {/* <img src={visa} alt="visa" />
            <img src={master} alt="master" />
            <img src={paypal} alt="paypal" />
            <img src={visa} alt="mercadopago" /> 

      <br />  */}

      <div className=" container card-group">
        <div className="card">
          <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
          <br />
          <h2>Estudiante Premium ♫</h2>
          <h3 class="card-title"> US$ 5*** al mes después del período de la oferta 1 cuenta</h3>
          <p class="card-text">*** Después, solo cuesta  US$ 5 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>
        </div>


        <div className="card">
          <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
          <br />
          <h2>Individual Premium ♫</h2>
          <h3 class="card-title"> US$ 8*** al mes después del período de la oferta 2 cuentas</h3>
          <p className="card-text">*** Después, solo cuesta  US$ 8 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>
        </div>



        <div className="card">
          <button type="button" class="btn btn-dark p-1 rounded-pill">1 mes gratis al suscribirse</button>
          <br />
          <h2>Duo Premium ♫</h2>
          <h3 class="card-title"> US$ 10*** al mes después del período de la oferta 1 cuenta</h3>
          <p className="card-text">*** Después, solo cuesta  US$ 10 al mes + impuestos (incluye IVA [21%], PAIS [8%], IG/IBP [45%], que vas a ver en tu extracto bancario). El mes gratis no está disponible para usuarios que ya hayan probado Premium. <u>Se aplican Términos y Condiciones.</u> </p>
        </div>
      </div>


      <div className=' wrapper d-flex aling-items-center justify-content-center w-100'>

        <div className="card">
          <h1>Elige tu plan Premium por US$ {price}</h1>
          <select className="select" value={opcion} onChange={handleCambio}>
            <option className="option" value="5"> PLan Estudiante Cinco Dolares</option>
            <option className="option" value="8"> Plan Individual Ocho Dolares</option>
            <option className="option" value="10">Plan Duo Diez Dolares</option>
          </select>
          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      </div>

    </Container>
  );
}



const Container = styled.div`

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
    padding-buttom: 10px;
}

.option{
  color:whitesmoke; 
  font-weight: 600;
  padding-top: 10px;
  padding-buttom: 20px;

}


background: rgb(255,255,1);
background: linear-gradient(0deg, rgba(255,255,1,1) 0%, rgba(0,0,0,1) 81%);

background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(255,255,0,1) 43%, rgba(0,0,0,1) 85%);

text-align: center;
height: 1700px;


h3 {
    font-size: 20px
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
  
}

h2 {
    color: whitesmoke;
  
}

.card{

  background-color: black;
  padding-top: 50px;
  color: whitesmoke;  
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #000000;
  margin: 10px;
  width: 450px;
  
  
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
  padding-top: 100px;
    color:whitesmoke;
    font-size: 18px;
    font-family: Georgia, 'Times New Roman', Times, serif;

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


