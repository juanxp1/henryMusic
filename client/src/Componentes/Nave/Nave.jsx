import React from 'react'
import { useState } from 'react'
import foto from './logosin.png'
import Logout from '../Logout/Logout'
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login'
import { useAuth0 } from "@auth0/auth0-react";
import gif from '../Nave/gif.gif'
import styled from 'styled-components'







function Nave() {

  const { isAuthenticated, isLoading } = useAuth0();




  if (isLoading) {
    return <img style={{ display: "block", width: "100%" }} src={gif} alt="gif" />
  }

  return (
    <>

      <NavContainer>

        <h2><img className='logo' src={foto} alt="logo" /> Henry<span> Music</span></h2>
        <div className="nav">
          <a className='premium' href='#'><button className="btn btn-warning">Premium</button> </a>
          <a className='login' >
            {isAuthenticated ? <Logout /> : <Login />}
            <Profile />
          </a>

        </div>

      </NavContainer>


    </>

  );
}

export default Nave;

const NavContainer = styled.nav`

.login{
  

}
.btn {
  background-color: #FFFF01;
}



 .logo{
    width: 80px;
    margin-left: 40px;
  }

  h2{
    color: #ffffff;
    font-weight: 300;

    span{
        font-weight:bold;
    }
}
padding: .4 rem;
background-color:#000000;
display: flex;
align-items: center;
justify-content: space-between;

a{

    color: white;
    text-decoration: none;
    margin-right: 2rem;
    
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
const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

 
`