import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { searchArtist } from '../../Actions/actions';
import styled from 'styled-components';

import { useState } from 'react';

function Search() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    setInput('');
    setNotFound(false);
  };
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    const result = dispatch(searchArtist(input));
    setNotFound(!result.payload);

    if (notFound) {
      handleShow();
      return;
    }

    setInput('');
    history.replace('/home');
  };

  return (
    <Div className="container-fluid w-100">
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <input
          className="align-items-center input bg-transparent  font-monospace"
          type="search"
          placeholder=" ⚡  Busca tu canción favorita"
          aria-label="Search"
          value={input}
          onChange={handleInputChange}
        />
        {error && <p className="text-danger">Debes ingresar un artista</p>}
      </form>


    </Div>
  );
}

export default Search;




const Div = styled.div`



.input {
    border-radius: 0px;
    border: none;
    height: 40px;
    text-align: center;
    width: 50%;
    color:white;
    font-size: 25px;
 
}

input::placeholder {
    font-size: 25px;
    text-align: center;
    color: #aaaaaa;
    border: none
}


`
