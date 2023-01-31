import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'

function Search() {


    return (

        <Div className='container-fluid'>
            <form className="container">
                <input
                    className="input"
                    type="text"
                    placeholder= " ⚡  ¿Qué te apetece escuchar?" 
                />

            </form>
        </Div>
    )
}

export default Search

const Div = styled.div`



.input {
    
    width: 40vh;
    border: #ffffff 1px solid;
    border-radius: 30px;
    text-align: center;
    
}





`