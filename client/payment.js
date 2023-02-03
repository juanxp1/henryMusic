import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";


  function payment(){
 const [amount, setAmount ] = useState[0];

const handleToken = (token) => {

    fetch("/payment/precio",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({token, amount}),
    })
    .then(res => res.json())
    .then(_ => {
        window.alert("Transaction Successful.");
    }).catch(_ => window.alert("Transaction Failed."))
    }


const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
};


return (
  
    <div className="payment"
    style={{
    
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    width:'100',
    height: "100vh",
    flexDirection: 'column',
    gap:15,

    }}>
 <FormControl sx={{ n: 1}}>
<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
<OutlinedInput

id="outlined-adornment-amount"
value={amount}
onChange={handleAmountChange}
startAdornment={<InputAdornment position="start">$</InputAdornment>}
></OutlinedInput>


 </FormControl>
 <StripeCheckout
 stripeKey={process.env.REACT_APP_STRIPE_KEY  || ""}
 token = {handleToken}
 name= ""
 panelLabel={`Suscription`}
 currency="USD"
 amount={amount * 100}

></StripeCheckout>


    </div>

)

  }

  export default payment;