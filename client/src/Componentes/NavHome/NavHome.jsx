import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import foto from '../NavHome/logosin.png'
import { useAuth0 } from "@auth0/auth0-react";
import Search from '../Search/Search';
import Logout from '../Logout/Logout';
import { Link } from "react-router-dom"



function NavHome() {

  const { user, isAuthenticated } = useAuth0()

  const logout = <Logout />

  return (


    isAuthenticated && (

      <Div className='container-fluid'>
        <nav className="navbar navbar-expand-lg container-fluid d-flex justify-content-end">
          <div className='container-fluid d-flex justify-content-end'>
            <div className='m-0 pt-0 px-3'>
              <Search />
            </div>
            <form className="d-flex" role="search">

              <nav className="navbar bg-body-tertiary m-0 pt-2">
                <Chip
                  avatar={<Avatar alt="picture" src={user.picture} />}
                  label={user.nickname}
                  variant="outlined"
                  className=" dropdown-toggle avatar "
                  data-bs-toggle="dropdown"
                  type="button"
                />
                <ul className="dropdown-menu">
                  <li className="btn btn-warning">Editprofile</li>
                  <br />
                  <li>{logout}</li>
                </ul>
              </nav>
            </form>
          </div>
        </nav>
      </Div>



    )
  )
}

export default NavHome

const Div = styled.div`

.btn{
   height: 35px;
   margin-bottom: 5px;
   background-color: #FFFF01;
   border: none;
}

.btn:hover{
  color: black;
  font-size: 17px;
  font-weight: bold;
}

.dropdown-menu.show{
  background-color: transparent; 
  padding: 0;
  margin:0;
  height: auto;

}


background-color:#000000;
height: auto;
max-height: 150px;

.avatar{
  color: #FFFF01;
  background-color: #222121;
  padding-right: 10px;
  margin-right:30px;
}


`