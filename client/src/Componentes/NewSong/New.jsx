import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components";


import foto from "../NewSong/foto.jpg"


function New() {


    return (
        <Container className="container-fluid">
            <div className="container-fluid">
                <div className="container-fluid d-flex justify-content-center ">
                    <img className="img" src={foto} alt="Foto" />

                </div>
                <div className="container-fluid d-flex justify-content-center ">
                    <Link className="" to="/home"><button className="btn bg-dark text-light">Go back home</button></Link>
                </div>



                <div className="">
                    <h1 className="text-light text-center   ">Create new Song</h1>
                    <form className="" >

                        <div className="container">
                            <input
                                className="input-group mb-3"
                                placeholder="Name"
                                type="text"
                            />
                        </div>



                        <div className="container">
                            <input
                                className="input-group mb-3"
                                placeholder="Album title"
                                type="text"
                            />

                        </div>

                        <div className="container">
                            <div className="input-group mb-3">
                                <input className="form-control" id="inputGroupFile02" placeholder="Cargar una cancion" />
                                <label className="input-group-text bg-dark text-light" for="inputGroupFile02">Upload song</label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="input-group mb-3">
                                <input className="form-control" id="inputGroupFile02" placeholder="Cargar una Img" />
                                <label className="input-group-text bg-dark text-light" for="inputGroupFile02">Upload Img</label>
                            </div>
                        </div>

                        <div className="container-fluid d-flex justify-content-center ">

                            <button className="btn btn-dark"> New</button>
                        </div>
                    </form>

                </div>

            </div>
        </Container>

    )
}



export default New

const Container = styled.div`

background-color: black;

.img {
    width: 100%;
    height: 400px;
}

`