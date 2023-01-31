import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useAuth0 } from "@auth0/auth0-react";
import Search from '../Search/Search';



function NavHome() {

  const { user, isAuthenticated } = useAuth0()

  return (


    isAuthenticated && (
     
        <Div className='container-fluid '>
          <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="baseline">
            <div className='box'>
              <Search />
            </div>
            <div className='d-flex justify-content-center navbar-brand'>
              <Chip className="avatar"
                avatar={<Avatar alt="picture" src={user.picture} />}
                label={user.nickname}
                variant="outlined"
              />

            </div>
          </Stack>
        </Div>
     
    )
  )
}

export default NavHome

const Div = styled.div`

background-color: #000000;

.box {
  display: flex;
  justify-content: center;
  
}

.avatar{
  color: #FFFF01;
  display: flex;
  justify-content: center;
  margin-right: 15px;
  background-color: #000000;
  
}

padding: 10px;

`