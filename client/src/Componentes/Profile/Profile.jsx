
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import gif from '../Nave/gif.gif'
import styled from 'styled-components'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user)

  if (isLoading) {
    return <img style={{ display: "block", width: "100%" }} src={gif} alt="gif" />
  }

  return (
    isAuthenticated && (
      <NavContainer>
        <div className="div">
          <img src={user.picture} alt={user.name} />

          <p>{user.nickname}</p>
        </div>
      </NavContainer>
    )
  );
}

export default Profile;

const NavContainer = styled.nav`

img{
  width: 50px;
}

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