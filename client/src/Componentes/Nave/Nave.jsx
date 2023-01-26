import React from 'react'
import { useState } from 'react'
import foto from './logosin.png'
import Logout from '../Logout/Logout'
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login'
import { useAuth0 } from "@auth0/auth0-react";
import gif from '../Nave/gif.gif'
import styled from 'styled-components'
import Button from './Button';





function Nave() {

  const { isAuthenticated, isLoading } = useAuth0();
  const [clicked, setCliked] = useState(false)

  const handleClick = () => {
    setCliked(!clicked)
  }

  if (isLoading) {
    return <img src={gif} alt="gif" />
  }

  return (
    <>

      {/* <nav class="navbar bg-dark" data-bs-theme="dark">
        <div>
          <img className={style.logo} src={foto} alt="Logo" />
          <h2>Henry Music</h2>
        </div>
        <div>
          {isAuthenticated ? <Logout /> : <Login />}
          <Profile />
        </div>

      </nav> */}

      <NavContainer>
        <img  src={foto} alt="Logo" />
        <h2>Henry<span> Music</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href='#'>
            {isAuthenticated ? <Logout /> : <Login />}
            <Profile />
          </a>

        </div>
        <div className='button'>
          <Button clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>


    </>

  );
}

export default Nave;

const NavContainer = styled.nav`
  h2{
    color: #ffffff;
    font-weight: 300;

    span{
        font-weight:bold;
    }
}
padding: .4 rem;
background-color:#333;
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

  img{
    width: 20px;
  }
`