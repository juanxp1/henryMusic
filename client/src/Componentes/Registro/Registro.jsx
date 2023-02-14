import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Registro.css'
import { Container } from '@mui/system';
import { useAuth0 } from "@auth0/auth0-react";


export default function Registro() {
    const { user } = useAuth0();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_n3bfhtp", "template_8ay97f7", form.current, "cfMaTPMB78FGsEJJk").then(
            (result) => {
                window.alert("Registro Exitoso, Ahora elige tu plan favorito.");
            },
            (error) => {
                console.log(error.text);
            }
        )
    }

    return (
        <Container className="payment container-fluid " id="premium">
            <div className=' wrapper d-flex aling-items-center justify-content-center w-100'>
                <div className='logiin'>

                    <h2 className='letras'>Activar Notificaciones al mail</h2>
                    <form ref={form} onSubmit={sendEmail} className='needs-validation'>
                        <div className='form-group  was-validated   mb-2'>
                            <label htmlFor='name' className='form-label' ><h2 className='text-muted'>{user?.name[0].toUpperCase() + user?.name.substring(1)}</h2>
                            </label>
                        </div>
                        <div className='form-group was-validated   mb-2'>
                            {/* <label htmlFor='email' className='form-label' color='yellow' >{user?.email}</label> */}
                            <input type='email' name='user_email' className='form-control text-center' required placeholder='Excribe tu e-mail' ></input>
                            <div className='invalid-feedback'>
                                Ingrese su e-mail por favor
                            </div>
                        </div>
                        <div className='form-group  was-validated    mb-2'>
                        </div>

                        <button type='submit' value='send' className='btn btn-success w-100 mt-2'  >Recibir Notificaciones</button>

                    </form>

                </div>
            </div>
        </Container>
    )
}





const NavContainer = styled.nav`

img{
    width: 200px;
   flex-direction: column;
  
}

.card{
    background-color: black;
    color: white;
}

.btn {
  background-color: #FFFF01;
}

h1{
    color: #000000;
    
}

background-image: linear-gradient(270deg, #ffa3ff 0, #ff9cff 3.33%, #ff97fe 6.67%, #ff97e5 10%, #ff99cc 13.33%, #ff9fb3 16.67%, #ffa79c 20%, #ffb185 23.33%, #ffbb6f 26.67%, #ffc65a 30%, #ffd145 33.33%, #ffdc30 36.67%, #ffe619 40%, #ffef00 43.33%, #fff700 46.67%, #ffff00 50%, #e6ff20 53.33%, #cbff38 56.67%, #adff4f 60%, #8aff66 63.33%, #5bff7d 66.67%, #00ff96 70%, #00ffaf 73.33%, #00ffc9 76.67%, #00ffe3 80%, #00fffd 83.33%, #00ffff 86.67%, #00ffff 90%, #00ffff 93.33%, #00ffff 96.67%, #00ffff 100%);


padding-top: 10px;
text-align: center;

text-align: center;


`



