import React, { useState } from "react";
import styled from "styled-components";
import home from "./home.png";
import listas from "./listas.png";
import cora from "./cora.png";
import mas from "./mas.png";
import favi from './favi.png';
import { Link } from 'react-router-dom'
import {
  NavbarContainer1,
  Navbarwrapper1,
  Menu1,
  MenuItem1,
  MenuItemLipo1,
  IconLogoMobile1,
} from "./Nav-Vertical-E";

import { FaBars, FaTimes } from "react-icons/fa";


function Navertical() {
  const [click, setClick] = useState(false);
  const ChangeClick = () => {
    setClick(!click);
  };

  return (
    <>
    <Div>
      <NavbarContainer1>
        <Navbarwrapper1>
          <div className="nav">
            <div className="sidebar ">
              <div className="navigation">
                <IconLogoMobile1 onClick={() => ChangeClick()}>
                  {click ? <FaTimes /> : <FaBars />}
                </IconLogoMobile1>

                <Menu1 click={click} className="container-fluid d-flex justify-content-center">
                  <ul>
                    <a href="/">
                      <img style={{ width: "150px", margin: "0", padding: "0" }} src={favi} alt="logo" />
                    </a>

                    <MenuItem1 onClick={() => ChangeClick()}>
                      <li>
                        <MenuItemLipo1>
                          <a href="/">
                            <span className="fa fa-home">
                              <img className="home" src={home} alt="home" />
                            </span>
                            <span>Home</span>
                          </a>
                        </MenuItemLipo1>
                      </li>
                    </MenuItem1>

                    <MenuItem1 onClick={() => ChangeClick()}>
                      <li>
                        <MenuItemLipo1>
                          <a href="/asds">
                            <span className="fa fas fa-book">
                              <img className="home" src={listas} alt="home" />
                            </span>
                            <span>Your Library</span>
                          </a>
                        </MenuItemLipo1>
                      </li>
                    </MenuItem1>

                    <MenuItem1 onClick={() => ChangeClick()}>
                      <li>
                        
                        <MenuItemLipo1>
                          <a href="#">
                            <span className="fa fas fa-heart">
                              <img className="home" src={cora} alt="home" />
                            </span>
                            <span>Liked Songs</span>
                          </a>
                        </MenuItemLipo1>
                      </li>
                    </MenuItem1>

                    <MenuItem1 onClick={() => ChangeClick()}>
                      <li>
                        <MenuItemLipo1>
                          <a href="/new">
                            <span className="fa fas fa-heart">
                              <img className="home" src={mas} alt="home" />
                            </span>
                            <span>New Song</span>
                          </a>
                        </MenuItemLipo1>
                      </li>
                    </MenuItem1>

                    <hr />
                  </ul>
                </Menu1>
              </div>
            </div>
          </div>
        </Navbarwrapper1>
      </NavbarContainer1>
    </Div>
    </>
  )
}

export default Navertical;

const Div = styled.div`
  .fotasa {
    width: 150px;
  }

  

  .sidebar .logo img {
    height: 100px;
  }

  .home {
    width: 23px;
  }

  hr {
    border: 1px solid #ffff01;
  }

  .sidebar {
    position: fixed; //me quita la parte de abajo del menu en pc
    left: 0;
    top: 0;
    bottom: 0;
    width: 230px;
    background-color: #000000;
    padding-top: 70px;
    padding-left: 0;

    @media screen and (max-width: 960px) {
      height: 0px;
      padding: 0px;
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
