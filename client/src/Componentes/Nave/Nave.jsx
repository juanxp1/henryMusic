import React, {useState} from 'react'
//import foto from './logosin.png'
import Logout from '../Logout/Logout'
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login'
import { useAuth0 } from "@auth0/auth0-react";
//import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Landing } from '../../Actions/actions';
import { useDispatch } from 'react-redux';
import {
  NavbarContainer, 
  Navbarwrapper,
  Icon,
  Menu,
  MenuItem,
  MenuItemLink,
  IconLogoMobile

} from "./Navbar.elements";

import { FaBars, FaTimes} from "react-icons/fa";





function Nave() {

  const dispatch = useDispatch();

  const landingOut = () => {
    dispatch(Landing())
  }

  const { isAuthenticated } = useAuth0();

  // if (isLoading) {
  //   return <h1>Loading...</h1>
  // }

  const  [click, setClick]= useState(false);
  const ChangeClick = () =>{
    setClick(!click)
  }


  return (
    <>

      <NavbarContainer>
      <Navbarwrapper>

        <Icon>
          <h2 ><img  alt="logo" />Henry<span > Music</span></h2>
        </Icon>

        <IconLogoMobile onClick={()=> ChangeClick()}>
          {click ? <FaTimes/> : <FaBars/>}
        </IconLogoMobile>



            <Menu click={click}>
        
           <MenuItem onClick={()=> ChangeClick()}>
            <MenuItemLink> 
            {isAuthenticated ? <Link to="/home" className='premium'> <button onClick={landingOut} className="btn btn-warning">Let's go !</button></Link> : ""}
            </MenuItemLink>
            </MenuItem>


            <MenuItem onClick={()=> ChangeClick()}>
            <MenuItemLink>
            <a href='#premium' className='premium' > <button className="btn btn-warning">Sé Premium </button></a>
            </MenuItemLink>
            </MenuItem>

            <MenuItem onClick={()=> ChangeClick()}>
            <MenuItemLink>
            <a href="#somos" className='premium' ><button className="btn btn-warning">¿Quiénes somos?</button> </a>
            </MenuItemLink>
            </MenuItem>

            <MenuItem onClick={()=> ChangeClick()}>
            <MenuItemLink>
            <Link className='login ' >
              {isAuthenticated ? <Logout /> : <Login />}
            </Link>
            </MenuItemLink>
            </MenuItem>


         
            <MenuItem onClick={()=> ChangeClick()}>
            <MenuItemLink>
            <Profile />
            </MenuItemLink>
            </MenuItem>

        
            </Menu>


          </Navbarwrapper>
      </NavbarContainer>



    </>

  );
}

export default Nave;

// const NavContainer = styled.nav`
// .profile{
//   padding-top: auto;
// }
// .btn {
//   background-color: #FFFF01;
  
  
// }
//  .logo{
//     width: 110px;
//     margin-left: auto;
//   }
//   h2{
//     color: #ffffff;
//     font-weight: 300;
  
//     span{
//         font-weight:bold;
//     }
// }
// background-color:#000000;
// a{
//     color: white;
//     text-decoration: none;
//     margin-right: auto;
    
// }
// .links{
//     position: absolute;
//     top:-700px;
//     left: -2000px;
//     margin-left: auto;
//     margin-right: auto;
//     text-align: center;
//     a{
//         color: black;
//         font-size: 2rem;
//         display: block;
//     }
//     @media(min-width: 768px){
//         position: initial;
//         margin: 0;
//         a{
//             font-size: 1rem;
//             color: white;
//             display: inline;
//         }
//     }
// }
// .links.active{
//     width: 100%;
//     display: block;
//      position: absolute;
//      margin-left: auto;
//      margin-right: auto;
//      top: 30%;
//      left: 0;
//      right:0;
//      text-align: center;
//      a{
//         color: #ffffff;
//      }
     
     
// }

// .premium{
//     @media screen and (max-width: 858px){
     
   

//     }          
// }
// .btn{
//     @media screen and (max-width: 858px){
 


//     }          
// }




//`
// const NavContainer = styled.nav`
// background-color: black;
// .menu{
// color: #fff;
//   height: 75px;
//   width: 100vw;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

// }
// .logo{
//   color: #fff;
//   font-size: 35px;
//   padding: 0 82px;
//   font-weight: bold;
// }
// .font-s{
//   color:#fff;
//   font-size: 35px;
// }
// .menu_items{
//   display: flex;
//   list-style: none;
//   margin-left: 300px;
//   justify-content: space-between;


// }
// .menu_items li {
//   border-radius: 3px;
//   margin: 0 5px;

// }
// .menu_items li a {
//   padding: 7px 13px;
//   text-decoration: none;
//   font-size: 18px;
//   display: block;
//   text-transform: uppercase;
//   color: #fff

// }
// .btn_menu{
//   margin-right: 30px;
//   font-size: 25px;
//   color: #fff;
//   cursor:pointer;
//   display: none;
// }
// ul.show{
//   top:65px;
// }
// @media screen and (max-width: 952px){
//   .logo{
//     font-size:30px;
//     padding: 35px;
//   }
//   .menu_items li a{
//     font-size: 16px;
//   }
// }
// @media screen and (max-width: 858px){
//   .menu{
//     height: 65px;
//   }
//   .btn_menu{
//     display: inline-flex;

//   }
//   .menu_items{
//     position: fixed;
//     width: 100vw;
//     height: calc(100% - 65%);
//     background: #414141;
//     top: -100vh;
//     text-align: center;
//     transition: all .4s;
//     flex-direction: column;


//   }
// .menu_items li{
//   margin: 30px;
//   line-height: 30px;

// }
// .menu_items li:hover{
//   background: none;
// }
// .menu_items{
//   font-size: 20px;
//   font-weight: bold;

// }
// .menu_items li a:hover{
//   color:#e9183b;
// }
// .logo{
//   max-width: 55%;
//   max-height: 55%;
//   font-size: 25px;
//   padding-left: 10px;

// }
// .font-s{
//   color:#fff;
//   font-size: large;
// }

// }
// @media screen and (max-width: 858px) and (orientation: landscape){
//   .menu_items li{
//     margin: 5px 0 0 0;

//   }
//   .menu_items{
//     overflow: scroll;
//     height: calc(100% - 65px);
//   }

// }
// `