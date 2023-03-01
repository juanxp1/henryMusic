import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Logout from "../Logout/Logout";

function NavHome() {
  const { user, isAuthenticated } = useAuth0();

  const logout = <Logout />;

  return (
    isAuthenticated && (

      <Div className='container-fluid'>
        <div className="navbar container d-flex justify-content-end">
          <div className=" d-flex justify-content-center">
           
          </div>

          <div className="d-flex justify-content-center" role="search">
            <nav className=" navbar bg-body-tertiary container-fluid">
              <Chip
                avatar={<Avatar alt="picture" src={user.picture} />}
                label={user.nickname}
                variant="outlined"
                className=" dropdown-toggle avatar "
                data-bs-toggle="dropdown"
                type="button"
              />
              <ul className="dropdown-menu">
              <a href="/update">
                <li className="btn btn-warning">Editprofile</li>
              </a>
                <br />
                <li>{logout}</li>
              </ul>
            </nav>
          </div>
        </div>
      </Div>
    )
  );
}

export default NavHome;

const Div = styled.div`
  @media screen and (max-width: 960px) {
    background-color: #000000;
   
  }

  .btn {
    height: 35px;
    margin-bottom: 5px;
    background-color: #ffff01;
    border: none;
  }

  .btn:hover {
    color: black;
    font-size: 17px;
    font-weight: bold;
  }

  .dropdown-menu.show {
    background-color: transparent;
    padding: 0;
    margin: 0;
    height: auto;
  }

 background-color: black;
;
  height: auto;
  max-height: 250px;

  .avatar {
    color: #ffff01;
    background-color: #222121;
    padding-right: 10px;
    margin-right: 30px;
  }
`;
