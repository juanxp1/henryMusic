import React from 'react'
import './Cards.css'
import { useAuth0 } from '@auth0/auth0-react'


const Cards = () => { 
    const { user } = useAuth0()
    return (
    <div className="contenedor">
        
        <div className="contenedor_contenido">
                <div className="titulos">
                    <h1>¡Buenos días! {user.nickname}</h1>
                </div>
                <div className="generos">
                    <div className="cards">
                        <div ><img className="card_imagen" src="https://los40es00.epimg.net/los40/imagenes/2017/04/06/album/1491501684_617106_1491503227_album_normal.jpg" alt="album" /></div>
                        <div className="card_text">
                            <h4>Luis Miguel</h4>
                           <a href='https://www.youtube.com/watch?v=NaiGbxBmFmI'target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="yellow" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                </svg>
                           </a>
                        </div>
                       
                    </div>
                    <div className="cards">
                        <div className="card_imagen"></div>
                        <div className="card_text">
                            <h4>Autor primero</h4>
                           
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card_imagen"></div>
                        <div className="card_text">
                            <h4>Autor primero</h4>
                            
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card_imagen"></div>
                        <div className="card_text">
                            <h4>Autor primero</h4>
                            
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card_imagen"></div>
                        <div className="card_text">
                            <h4>Autor primero</h4>
                            
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card_imagen"></div>
                        <div className="card_text">
                            <h4>Autor primero</h4>
                            
                        </div>
                    </div>
                </div>
                <div className="titulos">
                    <h2>Programas para probar</h2>
                    <span>Podcast que pensamos que te van a enganchar</span>
                </div>
{/* ------------------------------------------------------------------------------------------------------- */}

                <div className="podcast">
                    <div className="card_podcast">
                        <a href="https://www.youtube.com/watch?v=qBp2f_vJcD4&t=5966s" target="_blank" >
                            <img className='img_pod' src="https://yt3.ggpht.com/a/AATXAJwTuxA0vxBap04NvClVyAQYsePPT8wFgvwocQ=s900-c-k-c0xffffffff-no-rj-mo" alt="podcast" />                       
                            <h4>The Wild Project #185 ft El Bananero </h4>
                            <p>Alcohol y sustancias, Harry el Sucio Potter, Su depresión</p>
                        </a>
                    </div>
                    <div className="card_podcast">
                        
                        <h4>Titulo</h4>
                        <p>Podcast primero</p>
                    </div>
                    <div className="card_podcast">
                        
                        <h4>Titulo</h4>
                        <p>Podcast primero</p>
                    </div>
                    <div className="card_podcast">
                       
                        <h4>Titulo</h4>
                        <p>Podcast primero</p>
                    </div>
                    <div className="card_podcast">
                       
                        <h4>Titulo</h4>
                        <p>Podcast primero</p>
                    </div>
                    
                </div>
            </div>
  </div>
)}

export default Cards
