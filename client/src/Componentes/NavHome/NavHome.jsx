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

      <Div className='p-3 container-fluid d-flex justify-content-end'>
        <nav className="navbar bg-body-tertiary oli">

          <div className="btn-group probando ">
            <Search />
            <Chip

              avatar={<Avatar alt="picture" src={user.picture} />}
              label={user.nickname}
              variant="outlined"
              className=" dropdown-toggle avatar "
              data-bs-toggle="dropdown"
              type="button"
            />
            <ul className="dropdown-menu">
              <li>{logout}</li>
              <li>holis</li>
            </ul>
          </div>


        </nav>

      </Div>



    )
  )
}

export default NavHome

const Div = styled.div`


height:auto;

background-color:#000000;

.probando{
  padding-right: 20px;

}
.avatar{
  color: #FFFF01;
  background-color: #222121;
  padding-right: 10px;
  
  
}




`