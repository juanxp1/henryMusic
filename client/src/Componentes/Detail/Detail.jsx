import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Landing } from '../../Actions/actions';
import styled from 'styled-components';
import favi from '../Detail/favi.png'
import { getArtist } from '../../Actions/actions';
import cerati from '../Detail/cerati.jpg'


function Detail() {

    const dispatch = useDispatch();
    const infoMusic = useSelector((state) => state.artistDetail);
    console.log(infoMusic, "QONDI");


    // useEffect(() => dispatch(Landing()), [])

    useEffect(() => {
        dispatch(getArtist());
        dispatch(Landing());

    }, []);



    if (infoMusic) {
        return (
            <Div>
                <div className='contenedor'>
                    <div className=" bg-dark mw-100 pt-2 pb-1  container-fluid oki" >
                        <div className="row g-0 container-fluid">
                            <div className="col-md-4 container-fluid">
                                <img src={cerati} className="img-thumbnail bg-dark " alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <br />
                                    <p className="card-text p-0">Playlist</p>
                                    <h1 className="card-title display-1 p-0 m-0 name">Gustavo Cerati</h1>

                                </div>

                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>


                {/* PLAYLIST */}


                <div className='contenedor'>
                    <ol className="list-group list-group-numbered container-fluid ">
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src={favi} alt="" />
                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-dark rounded-pill">3:32</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src={favi} alt="" />
                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-dark rounded-pill">3:32</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src={favi} alt="" />
                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-dark rounded-pill">3:32</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src={favi} alt="" />
                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-dark rounded-pill">3:32</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src={favi} alt="" />
                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-dark rounded-pill">3:32</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src={favi} alt="" />
                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-dark rounded-pill">3:32</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start bg-transparent text-light">
                            <img className='fotico ms-4' src={favi} alt="" />
                            <div className=" ms-4 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span className="badge bg-dark rounded-pill">3:32</span>
                        </li>
                    </ol>
                </div>





            </Div>
        )

    }
}

export default Detail

const Div = styled.div`

span{
    font-size: 15px;
}

li{
    border:none;
}

.fotico{
    width: 50px;
}

.name {
    font-weight: 600;
    text-decoration: overline #FFFF01;
}
p{
    font-size: 30px;
}

.oki {
    background: rgb(0,0,0);
    background: linear-gradient(124deg, rgba(0,0,0,1) 5%, rgba(53,24,74,1) 100%, rgba(63,28,87,1) 100%, rgba(91,40,125,1) 100%, rgba(131,58,180,1) 100%);
}

color: white;

img {
    width: 350px;
    border-radius: 20px;
 
   
}
background-color: black;

.contenedor{
    width: auto;
    height: auto;
    background: rgb(194,194,45);
    background: linear-gradient(337deg, rgba(194,194,45,1) 0%, rgba(0,0,0,1) 80%);
    margin-left: 230px  !important;
    color: white;
    display: flex;
    position: relative;
}





`