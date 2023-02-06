import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import Pagination from '../Paginacion/Pagination'
import styled from 'styled-components';
import Hardcode from './Hardcode';


const Homedos = () => {
    const { user } = useAuth0()

    // //llamada al back
//     useEffect(()=>{
//         dispatch(getCards())
//     }, [dispatch])

// //trae los albunes desde el store
//    const CurrentCards = allAlbums;

    return (
        <Container>
            <div className="contenedor">

                <div className="contenedor_contenido">
                    <div className="titulos">

                        <h1>¡Buenos días! {user?.nickname} </h1>
                        
                        <Hardcode/>



                         {/* {CurrentCards?.map((el)=> {
                            return (
                                
                                <Link id={el.id} className="#" to={`/info/${el.id}`}>
                                    <Card 
                                        name={el.name}
                                        portada={el.album}
                                        descripcion={el.descripcion}
                                        id={el.id}
                                    />                                                                                                              
                                </Link>
                            )
                        })} */}
                        
                        <Pagination />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Homedos

const Container = styled.div`
*{
    margin: 0;
    padding: auto;
    box-sizing: border-box;
}

.contenedor{
    height: 140vh;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    margin-left: 230px;
    text-align: start;
    color: white;
    width: auto;
}


`