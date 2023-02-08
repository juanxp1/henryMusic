import React from 'react'

import foto from './logosin.png'
import Logout from '../Logout/Logout'
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login'
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components'
import { Link } from "react-router-dom"


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', <Login />, 'Dashboard', <Logout />];


function Nave() {



  const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <>

      <NavContainer className='navbar navbar-expand-lg container-fluid'>
        <div className='container-fluid'>
          <div className='container-fluid'>
            <h2><img className='logo' src={foto} alt="logo" />Henry<span> Music</span></h2>
          </div>

          <div className='container-fluid d-inline-flex '>

            {isAuthenticated ? <Link to="/home" className='premium'> <button className="btn btn-warning">Let's go !</button></Link> : ""}


            <a href='#premium' className='premium' > <button className="btn btn-warning">Cámbiate a Premium </button></a>


            <a href="#somos" className='premium' ><button className="btn btn-warning">¿Quiénes somos?</button> </a>


            <Link className='login ' >
              {isAuthenticated ? <Logout /> : <Login />}
            </Link>
            <Profile />

          </div>


        </div>

      </NavContainer>



    </>

  );
}

export default Nave;

const NavContainer = styled.nav`


.profile{
  padding-top: auto;
}

.btn {
  background-color: #FFFF01;
  
  
}



 .logo{
    width: 110px;
    margin-left: auto;
  }

  h2{
    color: #ffffff;
    font-weight: 300;
  

    span{
        font-weight:bold;
    }
}


background-color:#000000;


a{

    color: white;
    text-decoration: none;
    margin-right: auto;
    
}
.links{
    position: absolute;
    top:-700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
        color: black;
        font-size: 2rem;
        display: block;
    }
    @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;
        }
    }
}

.links.active{
    width: 100%;
    display: block;
     position: absolute;
     margin-left: auto;
     margin-right: auto;
     top: 30%;
     left: 0;
     right:0;
     text-align: center;
     a{
        color: #ffffff;
     }
     
     

}

.button{
    @media(min-width: 768px){
           display: none;

    }
}


`