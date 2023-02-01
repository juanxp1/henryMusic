import React from 'react'

import styled from 'styled-components'

function Search() {


    return (

        <Div className='container-fluid'>
            <form class="d-flex ">
                <input class="form-control me-2 input" type="search" placeholder=" ⚡  ¿Qué quieres escuchar?" aria-label="Search" />
            </form>
        </Div>
    )
}

export default Search

const Div = styled.div`



.input {
    
    width: 50vh;
    border-radius: 30px;
    text-align: center;
    width: 300px;
   height: 30px;
    
}


`