import React from "react";
import './Cards.css';


    export default function Card({ name, portada, descripcion}){
        return(
            <section className="album">
                <div className="card_album">
                    <div>
                        <img className="img_alb" src={portada} alt="No se encontro portada del album"/>
                    </div>
                
                    <h4 className= "name_alb">{name}</h4>
                
                    <div className="descripcion">
                        <p>{descripcion}</p>
                    </div>
                </div>        
            </section>
        )
    }
   