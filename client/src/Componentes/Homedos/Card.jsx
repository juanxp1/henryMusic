import React from "react";
import './Cards.css';


export default function Card({ name, image, album, id, country, year }) {
    return (
        <section className="album">
            <>Album:</>
            <span>{album}</span>
            <img key={id} className="imagen" src={image} alt={name} />
            <div className="card_album">Name:{name}</div>
            <span>{year}</span>
            <h4 className="name_alb">{name}</h4>
            <div className="descripcion">
                <p>Country:{country}</p>
            </div>
        </section>
    )
}
