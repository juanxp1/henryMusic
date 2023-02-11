import React from "react";
import styled from "styled-components";


export default function Card({ name, image, id, genre }) {
    return (

        <Div className=" container-fluid text-white ">
            {/* <img key={id} src={image} classNameName="card-img float-end oli " alt={name} />
            <div classNameName="card-img-overlay ">
                <div classNameName=" text-light">
                    <h4 classNameName="card-title olidos">{name}</h4>
                    <p classNameName="card-text">{genre}</p>
                </div>
            </div> */}
            {/* <div classNameName="card" >
                <img key={id} src={image} classNameName="card-img-top" alt={name} />
                <div classNameName="card-body bg-dark">
                    <h3 classNameName="card-text mw-100 olidos">{name}.</h3>
                </div>
            </div> */}


             <div className="container  ">

                <div className="card container p-0 ">
                    <div className="face face1">
                        <div className="content">
                            <span className="stars"></span>
                            <h2 className="java">{name}</h2>
                        </div>
                    </div>
                    <div className="face face2">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                </div>
            </div> 



        
        </Div>
    )
}

const Div = styled.div`


img {
    height: 300px;
    width: 300px;
    max-height: auto;
    border: none;
    border-radius: 10px;

}

.olidos{
 color: #ffffff;
 font-weight: 500;
 font-size: 30px;
 text-decoration: underline 2px solid #FFFF01;
}



/* Css de cards */

 .container {
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 35px;
    margin: 0 auto;
    padding: 20px 0;

    .card {
      position: relative;
      
      width: 300px;
      height: 300px;
      margin: 0 auto;
      background: #000;
      border-radius: 5px;
      box-shadow: 11px 11px 0px -3px rgba(255,255,1,1);
-webkit-box-shadow: 11px 11px 0px -3px rgba(255,255,1,1);
-moz-box-shadow: 11px 11px 0px -3px rgba(255,255,1,1);
margin: 0px;

      .face {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.face1 {
          box-sizing: border-box;
          padding: 20px;

          h2 {
            margin: 0;
            padding: 0;
          }

          .java {
            background-color: #FFFF01;
            -webkit-background-clip: text
            ;
            -webkit-text-fill-color: transparent;
          }
        }

        &.face2 {
          transition: 0.5s;

          h2 {
            margin: 0;
            padding: 0;
            font-size: 10em;
            color: #fff;
            transition: 0.5s;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 10;
          }
        }
      }
    }

    .card:hover .face.face2 {
      height: 60px;

      h2 {
        font-size: 2em;
      }
    }

    .card:nth-child(1) .face.face2 {
        background: rgb(0,0,0);
background: linear-gradient(124deg, rgba(0,0,0,1) 5%, rgba(53,24,74,1) 100%, rgba(63,28,87,1) 100%, rgba(91,40,125,1) 100%, rgba(131,58,180,1) 100%);
      border-radius: 15px;
    }

   
} 








`