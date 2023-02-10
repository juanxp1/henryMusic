import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
// import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Registro.css'





const Registro = () => {

    const form = useRef();
   

   const sendEmail = (e) => {
      e.preventDefault();

    emailjs.sendForm("service_n3bfhtp", "template_8ay97f7", form.current, "cfMaTPMB78FGsEJJk" ).then(
        (result) => {
            window.alert("Registro Exitoso, Ahora elige tu plan favorito.");
        },
        (error) => {

            console.log(error.text);
        }
    )

   }

    return (  

    
  <div className=' wrapper d-flex aling-items-center justify-content-center w-100'>
     <div className='logiin'>
           
        <h2 className='letras'>Registrate</h2>
        <form ref={form} onSubmit={sendEmail} className='needs-validation'>
        <div className='form-group  was-validated   mb-2'>
        <label htmlFor='name' className='form-label' >Name</label>
        <input type='text' name='user_name' className='form-control' required placeholder='Escribe tu nombre' ></input>
        <div className='invalid-feedback'>
            Registra tu nombre por favor
        </div>
        </div>
        <div className='form-group was-validated   mb-2'>
        <label htmlFor='email'  className='form-label' >Email</label>
    <input type='email' name='user_email' className='form-control' required  placeholder='Excribe tu e-mail' ></input>
    <div className='invalid-feedback'>
            Registra tu e-mail por favor
        </div>
    </div>
         <div className='form-group  was-validated    mb-2'>
         <label htmlFor='pasword'  className='form-label'>Password </label>
    <input type='password'name='user_password' className='form-control' required placeholder='Escribe tu password'></input>
    <div className='invalid-feedback'>
            Registra tu contraseña por favor
        </div>
        </div>
    
        <button type='submit' value='send' className='btn btn-success w-100 mt-2'> Registro</button>
   
</form>
</div>

</div>
    )
}

export default Registro;

// const Container = styled.div`
// .field {
//     margin-bottom: 10px;
//   }
  
//   .field label {
//     display: block;
//     font-size: 12px;
//     color: #777;
//   }
  
//   .field input {
//     display: block;
//     min-width: 250px;
//     line-height: 1.5;
//     font-size: 14px;
//   }
  
//   input[type="submit"] {
//     display: block;
//     padding: 6px 30px;
//     font-size: 14px;
//     background-color: #4460AA;
//     color: #fff;
//     border: none
//   }
  
// `
