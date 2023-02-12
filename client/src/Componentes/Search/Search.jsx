/* eslint-disable no-undef */
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// vamos hacer un llamado a la carpeta de actions
import {  searchArtist } from '../../Actions/actions'

function Search() {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const handleInputChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        dispatch(searchArtist(input))
        setInput('')
    }

    return (
        <Div className='container-fluid'>
            <form className="d-flex justify-content-end " onSubmit={handleSubmit}>
                <input className="row g-0 align-items-center input" type="search" placeholder=" ⚡  ¿Qué quieres escuchar?" aria-label="Search" value={input} onChange={handleInputChange} />
                {/* aca colocamos el error */}
                {error && <p className='text-danger'>Debes ingresar un artista</p>}
            </form>
        </Div>
    )
}

export default Search

const Div = styled.div`

.input {
    border-radius: 30px;
    text-align: center;
    width: 240px;

}

input::placeholder {

    font-size: 13px;

    text-align: center;

}

`