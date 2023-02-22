import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import { useAuth0 } from "@auth0/auth0-react";
import Search from '../Search/Search';
import Logout from '../Logout/Logout';




function NavHome() {

  const { user, isAuthenticated } = useAuth0()

  const logout = <Logout />

  return (

    isAuthenticated && (
      <Div className='container-fluid'>
        <nav className="navbar container d-flex justify-content-end">
          <form className="d-flex justify-content-center" role="search">
            <div className='mt-2'><Search /></div>
            <nav className="navbar bg-body-tertiary container-fluid">
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

        </nav>
      </Div>



    )
  )
}

export default NavHome

const Div = styled.div`

@media screen and (max-width: 960px){
  background-color: #000000;
  width: auto;
  display: flex;
  direction: column;
  

}

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
max-height: 250px;

.avatar{
  color: #FFFF01;
  background-color: #222121;
  padding-right: 10px;
  margin-right:30px;
}


`