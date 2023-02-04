import React from 'react'

import styled from 'styled-components'

function Search() {


    return (

        <Div className='container-fluid'>
            <form className="d-flex justify-content-end ">
                <input className="row g-0 align-items-center input" type="search" placeholder=" ⚡  ¿Qué quieres escuchar?" aria-label="Search" />
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