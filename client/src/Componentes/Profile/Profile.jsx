
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import gif from '../Nave/gif.gif'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user)

  // if (isLoading) {
  //   return <h1>LOADING...</h1>
  // }

  return (
    isAuthenticated && (
      <NavContainer>
        <div className="div container">
          <div>
            <Avatar src={user.picture} alt={user.name} />
          </div>
        </div>

      </NavContainer>
    )
  );
}

export default Profile;

const NavContainer = styled.nav`


h2{
  font-size: 20px;
}

.div{
  display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  
}

`