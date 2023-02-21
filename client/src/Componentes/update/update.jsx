/* eslint-disable react/jsx-no-undef */
import { React, useState} from "react";
import { useDispatch } from 'react-redux'
import {  useHistory } from "react-router-dom"
import styled from "styled-components";

import Button from 'react-bootstrap/Button';
import { updateSong } from '../../Actions/actions'

 
const Actualizar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [error, setError] = useState([]);
    const [song, setSong] = useState({
        title: "",
        image: "",
    });

    const handleInputChange = (e) => {
        setSong({
            ...song,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (song.title.trim() === "" || song.image.trim() === "") {
            setError("Todos los campos son obligatorios");
            return;
        }
        setError(null);
        dispatch(updateSong(song))
        history.push('/home')
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Actualizar</h1>
                <input
                    type="text"
                    name="title"
                    placeholder="Titulo"
                    error={error}
                    onChange={handleInputChange}
                />
                <input

                    type="text"
                    name="image"
                    placeholder="Imagen"
                    error={error}
                    onChange={handleInputChange}
                />
                <Button variant="primary" type="submit">
                    Actualizar
                </Button>
            </Form>
        </Container>
    );
};






export default Actualizar;

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

const Form = styled.form`
 

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 400px;
    height: 400px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `;
