import React, {useState} from 'react';
import styled from 'styled-components';
import home from './home.png';
//import foto from '../Nav-Vertical/app.png';
//import lupa from './lupa.png';
import listas from './listas.png';
import crear from './crear.png';
import cora from './cora.png';
import play from './play.mp4';
import mas from './mas.png';
import {
  NavbarContainer1,
  Navbarwrapper1,
  Menu1,
  MenuItem1,
  MenuItemLink1,
  IconLogoMobile1

} from "./Nav-Vertical-E";

import { FaBars, FaTimes } from "react-icons/fa";


function Navertical() {

  const [click, setClick] = useState(false);
  const ChangeClick = () => {
    setClick(!click)
  }


  return (

    <NavbarContainer1>
    <Navbarwrapper1>
    <Div >
      <div className='nav'>
        <div className="sidebar ">

          {/* { <div className="logo d-flex justify-content-center">
            <a className='fotaso' href="/">
              <video className='fotasa' src={play} alt="logo" autoPlay loop muted  />
            </a>
          </div> } */}

          <div className="navigation">

          <IconLogoMobile1 onClick={() => ChangeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile1>


          <Menu1 click={click}>
            <ul>


            <MenuItem1 onClick={() => ChangeClick()}>
              <li>
              <MenuItemLink1>
                <a href={"/home"}>
                  <span className="fa fa-home"><img className='home' src={home} alt="home" /></span>
                  <span>Home</span>
                </a>
                </MenuItemLink1>
              </li>
              </MenuItem1>
              {/* <li>
                <a href="#">
                  <span className="fa fa-search"><img className='home' src={lupa} alt="home" /></span>
                  <span>Search</span>
                </a>
              </li> */}
             <MenuItem1 onClick={() => ChangeClick()}>
              <li>
              <MenuItemLink1>
                <a href="#">
                  <span className="fa fas fa-book"><img className='home' src={listas} alt="home" /></span>
                  <span>Your Library</span>
                </a>
                </MenuItemLink1>
              </li>
              </MenuItem1>


              <MenuItem1 onClick={() => ChangeClick()}>
              <li>
              <MenuItemLink1>
                <a href="#">
                  <span className="fa fas fa-plus-square"><img className='home' src={crear} alt="home" /></span>
                  <span>Create Playlist</span>
                </a>
                </MenuItemLink1>
              </li>
              </MenuItem1>

              <MenuItem1 onClick={() => ChangeClick()}>
              <li>
              <MenuItemLink1>
                <a href="#">
                  <span className="fa fas fa-heart"><img className='home' src={cora} alt="home" /></span>
                  <span>Liked Songs</span>
                </a>
                </MenuItemLink1>
              </li>
              </MenuItem1>


              <MenuItem1 onClick={() => ChangeClick()}>
              <li>
              <MenuItemLink1>
                <a href="/new">
                  <span className="fa fas fa-heart"><img className='home' src={mas} alt="home" /></span>
                  <span>New Song</span>
                </a>
                </MenuItemLink1>
              </li>
              </MenuItem1>


              <hr />
            </ul>


            </Menu1>

          </div>
        </div>
      </div>
    </Div>
    
    </Navbarwrapper1>
    </NavbarContainer1>
       


  )
}

export default Navertical

const Div = styled.div`

.fotasa {
  width: 140px;
}



.sidebar .logo img {
 height: 100px;
}


.home{
  width: 23px;
}

hr {
  border: 1px solid #FFFF01;
}
 
.sidebar {    
  position: fixed;  //me quita la parte de abajo del menu en pc 
  left: 0;
  top: 0;
  bottom: 0;
  width: 230px;
  background-color: #000000;
  padding: 24px;
  padding-left: 0;

  @media screen and (max-width: 960px){

    height: 20px;
    padding:1px;
    
  }

}

.sidebar .navigation ul {
  list-style: none;
  margin-top: 0px;
  padding-top: 0px;
  padding-bottom: 0px; 
}
.sidebar .navigation ul li {
  padding: 10px 0px;
}
.sidebar .navigation ul li a {
  color: #cfcece;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;

  
}
.sidebar .navigation ul li a:hover,
.sidebar .navigation ul li a:active,
.sidebar .navigation ul li a:focus {
  color: #ffffff;
}
.sidebar .navigation ul li a:hover .fa,
.sidebar .navigation ul li a:active .fa,
.sidebar .navigation ul li a:focus .fa {
  color: #b3b3b3;
}
.sidebar .navigation ul li .fa {
  font-size: 20px;
  margin-right: 10px;
}
.sidebar .navigation ul li a:hover .fa:hover,
.sidebar .navigation ul li a:hover .fa:active,
.sidebar .navigation ul li a:hover .fa:focus {
  color: #ffffff;
}
.sidebar .policies {
  position: absolute;
  bottom: 100px;
}
.sidebar .policies ul {
  list-style: none;
}
.sidebar .policies ul li {
  padding-bottom: 5px;
}
.sidebar .policies ul li a {
  color: #b3b3b3;
  font-weight: 500;
  text-decoration: none;
  font-size: 10px;

}
.sidebar .policies ul li a:hover,
.sidebar .policies ul li a:active,
.sidebar .policies ul li a:focus {
  text-decoration: underline;
}

ul {

  padding-top: 40px;


}








`