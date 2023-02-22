import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Contenedor>
      <br />
      <br />
      <br />
      <h1> 404 Not found </h1>
      <br />
      <br />
      <br />
      <div>
        <Link to={"/"}>
          <button type="button" className="btn btn-warning">
            Login
          </button>
        </Link>
        <br />
        <br />
        <br />
      </div>
    </Contenedor>
  );
}
const Contenedor = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  height: 100vh;
`;
