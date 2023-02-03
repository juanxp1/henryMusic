import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { FormControl} from "@mui/material";



  function Payment(){
 const [ amount, setAmount ] = useState(0);

const handleToken = (token) => {

    fetch("http://localhost:3001/precio/checkout",{
        method: "POST",
        
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({token, amount }),
    })
    .then(res => res.json())
    .then(_ => {
        window.alert("Transaction Successful.");
    }).catch(_ => window.alert("Transaccion Exitosa.")
    )
    }


return (
  
    <div className="payment"
    style={{
    
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width:'400',
    height: "90vh",
    flexDirection:'column',
    paddingTop: 80,
    image:'./NavHome/logosin.png',
    color:"black",
    gap:60,
    marginLeft:700,
    paddingLeft:70,
    paddingRight:30,
    borderRadius:10,
    marginRight:700,
    paddingBottom:5,
    borderBlockColor:"yellow",
    flexWrap: "wrap"
  
    

    }}>
 <FormControl sx={{ n: 1}} >
<img
src='https://i.pinimg.com/564x/06/f9/6f/06f96f2944fcfabe3a291a1060441511.jpg'
className="img-fluid" alt="k68 keyboard" width="200px" justifyContent="center" 
/>

<h3 className="text-center">Premium:$100</h3>
<h5 className="text-center">Escucha música sin anuncios
Reproduce tus canciones en cualquier lugar, incluso en modo offline
Reproduce contenido on-demand
Elige la opción prepaga o suscríbete.</h5>

 </FormControl>
 <StripeCheckout
 stripeKey={process.env.REACT_APP_STRIPE_KEY  || ""}
 token = {handleToken}
 name= "Henry Music"
 panelLabel={`Suscription`}
 amount={10000}
 currency="USD"
 image='http://localhost:3000/static/media/logosin.12495e56.png'
//  width={500}
>

</StripeCheckout>

 <FormControl sx={{ n: 1}}>

<img
src= 'https://i.pinimg.com/564x/db/e0/de/dbe0de3fdb7c7e963c9befc19f10f816.jpg'
className="img-fluid" alt="k68 keyboard" width="200px" justifyContent="center" 
/>
<h3 className="text-center">Duo:$150</h3>
<h5 className="text-center">Tendras 2 cuentas Premium para parejas que conviven.
Reproducción de música sin anuncios, en modo offline y on demand

Elige la opción prepaga o suscríbete.</h5>


 </FormControl>


 <StripeCheckout
 stripeKey={process.env.REACT_APP_STRIPE_KEY  || ""}
 token = {handleToken}
 name= "Henry Music"
 image='http://localhost:3000/static/media/logosin.12495e56.png'
 panelLabel={`Suscription`}
 currency="USD"
 amount={15000}

>

</StripeCheckout>

 <FormControl sx={{ n: 1}}>
<img
src= 'https://i.pinimg.com/564x/71/3d/f5/713df5246cec6ed1385333f547b56beb.jpg'
className="img-fluid" alt="k68 keyboard" width="200px" justifyContent="center" 
/>
<h3 className="text-center">Estudiante:$80</h3>
<h5 className="text-center">Descuento especial para estudiantes universitarios que cumplan con los requisitos.
Escucha tu música.
Reproduce tus canciones favoritas, incluso en modo offline.</h5>

 </FormControl>

 <StripeCheckout
 stripeKey={process.env.REACT_APP_STRIPE_KEY  || ""}
 token = {handleToken}
 name= "HenryMusic"
image='http://localhost:3000/static/media/logosin.12495e56.png'
 panelLabel={`Suscription`}
 currency="USD"
 amount={8000}
>
</StripeCheckout>

    </div>

)

  }

  export default Payment;


 