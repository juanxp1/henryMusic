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
    history.replace('/');
  };

  return (
    <Div className="container-fluid w-100">
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <input
          className="row g-0 align-items-center input"
          type="search"
          placeholder=" ⚡  Busca tu canción favorita"
          aria-label="Search"
          value={input}
          onChange={handleInputChange}
        />
        {error && <p className="text-danger">Debes ingresar un artista</p>}
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Artista no encontrado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lo sentimos, no se ha encontrado ningún artista con el nombre "{input}".
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Div>
  );
}

export default Search;




// export default function Search() {
//     const [input, setInput] = useState('')
//     const dispatch = useDispatch()
//     const history = useHistory();

//     function handleChange(e) {
//         setInput(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//         dispatch(searchArtist(input))
//         setInput('')
//         history.push('/artist')
//     }

//     return (
//         <Div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     className="input"
//                     type="text"
//                     placeholder="Search Artist"
//                     value={input}
//                     onChange={handleChange}
//                 />
//             </form>
//         </Div>
//     )
// }





const Div = styled.div`

@media screen and (max-width: 960px){
display: none;
}


.input {
    border-radius: 20px;
    text-align: center;
    width: auto;

}

input::placeholder {
    font-size: 13px;
    text-align: center;
}

@media (max-width: 768px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 576px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 375px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 320px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 280px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 240px) {
    .input {
        width: 100%;
    }
}


`
