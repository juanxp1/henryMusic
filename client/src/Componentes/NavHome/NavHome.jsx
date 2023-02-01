import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useAuth0 } from "@auth0/auth0-react";
import Search from '../Search/Search';
import Logout from '../Logout/Logout';



function NavHome() {

  const { user, isAuthenticated } = useAuth0()

  const logout = <Logout />

  return (


    isAuthenticated && (

      <Div className='container-fluid '>
        <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="baseline" >
          <div className='d-flex justify-content-center navbar-brand'>
            <div className="btn-group">
              <Search />
              <Chip
                avatar={<Avatar alt="picture" src={user.picture} />}
                label={user.given_name}
                variant="outlined"
                className=" btn-secondary dropdown-toggle avatar" data-bs-toggle="dropdown" aria-expanded="false"
              />

              <ul className="dropdown-menu">

                <li><a class="dropdown-item" href="#"><button>{logout}</button></a></li>

              </ul>
            </div>

          </div>
        </Stack>
      </Div>

    )
  )
}

export default NavHome

const Div = styled.div`

background-color: #000000;



.avatar{
  color: #000000;
  display: flex;
  justify-content: center;
  margin-right: 15px;
  background-color: #ffffff;
  
}

.search{
  width: 100%;
}

padding: 10px;


button {
width: 100%;
}


`