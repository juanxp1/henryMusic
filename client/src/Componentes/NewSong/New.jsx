import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import style from "../NewSong/crear.module.css";

import foto from "../NewSong/foto.jpg"


function New() {

    // const dispatch = useDispatch();

    // const history = useHistory();


    // aca el useEffect



    // const [song, setSong] = useState({
    //     name: "",
    //     artista: "",
    //     album: "",
    //     cancion: "",
    //     image: "",

    // })

    // const [errors, setErrors] = useState({});



    // function validate(input) {
    //     let errors = {};

    //     if (!input.name) {
    //         errors.name = alert("string");

    //     } else if (parseInt(input.artista)) {
    //         errors.artista = "string";
    //     }
    //     if (!input.image) {
    //         errors.image = "string";
    //     }

    //     if (!input.album) {
    //         errors.album = "string"
    //     }
    //     if (!input.cancion) {
    //         errors.cancion = "string"
    //     }


    //     return errors;
    // }




    // function handleChange(event) {
    //     setSong({
    //         ...song,
    //         [event.target.name]: event.target.value
    //     })
    //     setErrors(validate({
    //         ...song,
    //         [event.target.name]: event.target.value
    //     }));
    // }


    // function handleSelect(e) {
    //     setSong({
    //         ...song,
    //         temperament: [...song.temperament, e.target.value]
    //     })
    // }





    return (
        <div className="">
        <div className={style.uno}>
            <div className={style.divdos}>
                <img className={style.fot} src={foto} alt="Foto" />
                <Link className={style.divdos} to="/home"><button className={style.dos}>go back home</button></Link>
            </div>

            <div className={style.divtres}>
                <h1 className={style.creardog}>Create new Song</h1>
                <form className={style.select} >
                    {/* //onSubmit={(e) => handleSubmit(e)} */}
                    <div>
                        <input
                            className={style.select}
                            placeholder="Name"
                            type="text"
                            // value={song.name}
                            name="name"
                            required
                        // onChange={(e) => handleChange(e)}
                        />
                        {/* {errors.name && (
                            <p >{errors.name}</p>
                        )} */}
                    </div>

                    <div>
                        <input
                            className={style.select}
                            placeholder="imagen"
                            type="text"
                            // value={dogs.image}
                            name="image"
                            required
                        // onChange={(e) => handleChange(e)}
                        />
                        {/* {errors.image && (
                            <p >{errors.image}</p>
                        )} */}
                    </div>

                    <div>
                        <input
                            className={style.select}
                            placeholder="Album title"
                            type="text"
                            // value={dogs.weight}
                            name="weight"
                        // onChange={(e) => handleChange(e)}
                        />
                        {/* {errors.weight && (
                            <p >{errors.weight}</p>
                        )} */}
                    </div>

                    <div>
                        <input
                            className={style.select}
                            placeholder="cancion"
                            type="text"
                            // value={dogs.height}
                            name="height"
                        // onChange={(e) => handleChange(e)}
                        />
                        {/* {errors.height && (
                            <p >{errors.height}</p>
                        )} */}
                    </div>

                    <div>
                        <input
                            className={style.select} ç

                            placeholder="genero"
                            type="text"

                            
                            name="life_span"
                        // onChange={(e) => handleChange(e)}
                        />
                        {/* {errors.life_span && (
                            <p >{errors.life_span}</p>
                        )} */}

                        <button className="btn btn-primary"> New</button>
                    </div>
                </form>

            </div>

        </div>
        </div>
    )
}



export default New