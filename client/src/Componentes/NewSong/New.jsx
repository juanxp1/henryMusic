import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components";


import foto from "../NewSong/foto.jpg"


function New() {


    return (
        <Container>
            <div className="">
                <div className="">
                    <img className="img" src={foto} alt="Foto" />
                    <Link className="" to="/home"><button className="">go back home</button></Link>
                </div>

                <div className="">
                    <h1 className="">Create new Song</h1>
                    <form className="" >
                        {/* //onSubmit={(e) => handleSubmit(e)} */}
                        <div>
                            <input
                                className=""
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
                                className=""
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
                                className=""
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
                            <div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02" />
                                <label class="input-group-text" for="inputGroupFile02">Upload song</label>
                            </div>
                        </div>

                        <div>
                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <button className="btn btn-primary"> New</button>
                        </div>
                    </form>

                </div>

            </div>
        </Container>

    )
}



export default New

const Container = styled.div`

.img {
    width: 200px;
}
`