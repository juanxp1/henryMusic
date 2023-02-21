import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllAlbums, getPlayer, isPlaying, Landing } from ".././../Actions/actions.js";
import styled from "styled-components";
import { getAllArtists, filtroGenero, ordenPorAbc } from ".././../Actions/actions.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import play from './play.png'

const Homedos = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const infoMusic = useSelector((state) => state.artists);
  const infoAlbum = useSelector((state) => state.albums);
  const infoPlayer = useSelector(state => state.player)

  function handleGenero(genero) {
    genero.preventDefault();
    dispatch(filtroGenero(genero.target.value));
  }

  const [data, setData] = useState({ album: [] })

  const [orden, setOrden] = useState('')


  function handleClick(e) {
    setData({ ...data, i: e })
    dispatch(getPlayer({ tracks: data.album[e].tracks, i: 0 }))
    dispatch(isPlaying())
  }

  function handleAbc(e) {
    e.preventDefault();
    dispatch(ordenPorAbc(e.target.value))
    //setCurrentPage(1);
    setOrden(`ordenado ${e.target.value}`)
    console.log("caradechot", e.target.value)
  }


  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllArtists(20));
      dispatch(getAllAlbums(40));
    }
    dispatch(Landing());
  }, [isAuthenticated]);

  useEffect(() => {
    setData({ album: infoAlbum.albums, i: 0 })
  }, [infoAlbum])


  console.log(infoPlayer)

  return (
    <Container1>
      <div className="contenedor d-flex justify-content-center container-fluid">
        <div className="container-fluid">
          <h1 className="h1 ms-3">
            Bienvenido{" "}
            <span className="pit">{user?.nickname.toUpperCase()}</span>
          </h1>
          <h2 className=" d-flex justify-content-center mt-4 mb-3  h1 text-white">
            Top artistas
          </h2>



          {/* HARCODE */}

          <div className="swiffy-slider container-fluid slider-item-show3 slider-nav-autoplay">
            <ul className="slider-container slider-nav-autoplay">
              {infoAlbum.albums ?
                infoAlbum.albums?.slice(1, 20).map((c) => {
                  return (
                    <li id="slide1" className=" container-fluid d-flex justify-content-center">
                      <Container>
                        <div className="cards">
                          <div className='cards-info'>
                            <img className="card_imagen" key={c.id} src={c.images[0]?.url} alt={c.name} />
                            <div className="card_text container">
                              <p className='d-flex justify-content-start w-100'>{c.name}</p>
                              <a className='d-flex ms-3 p-0' onClick={() => handleClick(infoAlbum.albums.indexOf(c))}><img src={play} alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </Container>
                    </li>
                  );
                })
                : (
                  <div className="uwu w-100 container-fluid">
                    <div className="loaderRectangle d-flex justify-content-center">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                )}
            </ul>

          </div>


          {/* FILTRO POR ABC */}
          <div className="d-flex contianer justify-content-center">
            <div className="btn-wrapper mt-0 mb-3 mt-4 container-fluid">
              <select onChange={e => handleAbc(e)} className="btn">
                <option value="asc">ascendent A-Z</option>
                <option value="des">descendent Z-A</option>
              </select>
            </div>

            {/* BOTON FILTRO POR GENERO */}

            <div className="btn-wrapper mt-0 mb-3 mt-4 container-fluid">
              <select onChange={(e) => handleGenero(e)} className="btn">
                <option value="All">All Generos</option>
                <option value="Pop">Pop</option>
                <option value="Trap">Trap</option>
                <option value="Latin">Latin </option>
                <option value="Rock">Rock </option>
                <option value="hip hop">hip hop</option>
              </select>
            </div>
          </div>

          {/* Aqui comienzan los carruseles */}

          <h2 className="d-flex justify-content-start h1 ms-3">Lo mas escuchado </h2>
          {/* carrusel */}

          <div className="swiffy-slider">
            <ul className="slider-container d-flex">
              {infoMusic.artists ? (
                infoMusic?.artists.map((c) => {
                  return (
                    <li className=" container-fluid d-flex justify-content-center">
                      <Link to={"/detail/" + c.id}>
                        <Card
                          key={c.id}
                          id={c.id}
                          name={c.name}
                          image={c.images[0]?.url}
                          genre={c.genres.map((el) => (
                            <span> {el.name} </span>
                          ))}
                        />
                      </Link>
                    </li>
                  );
                })
              ) : (
                <div className="uwu w-100 container-fluid">
                  <div className="loaderRectangle d-flex justify-content-center">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </ul>
            <button type="button" className="slider-nav"></button>
            <button
              type="button"
              className="slider-nav slider-nav-next"
            ></button>
          </div>

          <h2 className=" d-flex justify-content-start h1 ms-3">Temas para {user?.name}</h2>


          {/* carrusel */}

          <div className="swiffy-slider">
            <ul className="slider-container d-flex">
              {infoMusic.artists ? (
                infoMusic?.artists.map((c) => {
                  return (
                    <li className=" container-fluid d-flex justify-content-center">
                      <Link to={"/detail/" + c.id}>
                        <Card
                          key={c.id}
                          id={c.id}
                          name={c.name}
                          image={c.images[0]?.url}
                          genre={c.genres.map((el) => (
                            <span> {el.name} </span>
                          ))}
                        />
                      </Link>
                    </li>
                  );
                })
              ) : (
                <div className="uwu w-100 container-fluid">
                  <div className="loaderRectangle d-flex justify-content-center">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </ul>
            <button type="button" className="slider-nav"></button>
            <button
              type="button"
              className="slider-nav slider-nav-next"
            ></button>
          </div>


          <h2 className="d-flex justify-content-start h1 ms-3 pb-4">  Canciones creadas por la Comunidad </h2>

          <br /><br /><br /><br /><br />
          {/* carrusel */}
          {/* <div className="swiffy-slider">
            <ul className="slider-container d-flex">
              {infoMusic.artists ? (
                infoMusic?.artists.map((c) => {
                  return (
                    <li className="d-flex">
                      <Link to={"/detail/" + c.id}>
                        <Card
                          key={c.id}
                          id={c.id}
                          name={c.name}
                          image={c.images[0]?.url}
                          genre={c.genres.map((el) => (
                            <span> {el.name} </span>
                          ))}
                        />
                      </Link>
                    </li>
                  );
                })
              ) : (
                <div className="uwu mw-100 container-fluid">
                  <div className="loaderRectangle d-flex justify-content-center">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </ul>
            <button type="button" className="slider-nav"></button>
            <button
              type="button"
              className="slider-nav slider-nav-next"
            ></button>
          </div> */}
        </div>
      </div>

    </Container1>


  );
};

export default Homedos;

const Container1 = styled.div`
  * {
    text-decoration: none;
    color: #ffffff;
  }

  .pikachu {
    font-size: 13px;
    color: #ffff01;
  }

  li {
    list-style: none;
    text-decoration: none;
  }

  .pit {
    text-decoration: underline #ffff01;
  }

  .h1 {
   font-weight: 600; 
  }

  .contenedor {
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    background: rgb(0,0,0);
    background: linear-gradient(138deg, rgba(0,0,0,1) 8%, rgba(0,1,24,1) 100%, rgba(0,1,27,1) 100%, rgba(0,1,54,1) 100%, rgba(0,3,122,1) 100%);
    margin-left: 230px;
    color: white;
    @media screen and (max-width: 960px) {
      margin-left: auto;
    }
  }



  .btn-wrapper {
    border-radius: 10px;
    margin-top: 20px;
    width: 220px;
    height: 50px;
    position: relative;
    z-index: 1;
    background: linear-gradient(270deg, #ffff01, white, #000000, #000000);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.363);
    background-size: 800% 800%;
    animation: animateBorder 8s ease infinite;
  }

  .btn {
    width: 95%;
    height: 90%;
    position: absolute;
    padding: 0px;
    border: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #131313;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 4.5px;
    color: white;
    font-weight: bold;
  }

  @keyframes animateBorder {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .uwu {
    animation-name: uwu;
    animation-duration: 6s;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes uwu {
    0% {
      opacity: 1;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  .loaderRectangle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 0 3px;
  }

  .loaderRectangle div {
    width: 10px;
    height: 16px;
    animation: 0.9s ease-in-out infinite;
    background: linear-gradient(270deg, yellow, white, orange, red);
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }

  .loaderRectangle div:nth-child(1) {
    animation-name: rectangleOneAnim;
    animation-delay: 1s;
  }

  @keyframes rectangleOneAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 30px;
    }

    100% {
      height: 15px;
    }
  }

  .loaderRectangle div:nth-child(2) {
    animation-name: rectangleTwoAnim;
    animation-delay: 1.1s;
  }

  @keyframes rectangleTwoAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 40px;
    }

    100% {
      height: 15px;
    }
  }

  .loaderRectangle div:nth-child(3) {
    animation-name: rectangleThreeAnim;
    animation-delay: 1.2s;
  }

  @keyframes rectangleThreeAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 50px;
    }

    100% {
      height: 15px;
    }
  }

  .loaderRectangle div:nth-child(4) {
    animation-name: rectangleFourAnim;
    animation-delay: 1.3s;
  }

  @keyframes rectangleFourAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 40px;
    }

    100% {
      height: 15px;
    }
  }

  .loaderRectangle div:nth-child(5) {
    animation-name: rectangleFiveAnim;
    animation-delay: 1.4s;
  }

  @keyframes rectangleFiveAnim {
    0% {
      height: 15px;
    }

    40% {
      height: 30px;
    }

    100% {
      height: 15px;
    }
  }
`;

const Container = styled.div`


img{
    width: 40px;
}

.cards{
    min-width:300px;
    height: 80px;
    transition: var(--efecto);
    flex-basis: calc((100% / 3) - 20px);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 1rem;
    margin: 10px;
    --background: linear-gradient(to bottom,  #000000 70%, #FFFF01 100%);
    padding: 4px;
    overflow: visible;
    background: #000000;
    background: var(--background);
    position: relative;
    z-index: 1;

}
.cards::after {
    position: absolute;
    content: "";
    top: 20px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.8);
    filter: blur(100px);
    background: #000000;
    background: var(--background);
    transition: opacity .5s;
}
.cards-info {
    --color: #181818;
    background: var(--color);
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: .7rem;
}
.cards:hover::after {
    opacity: 0;
}   
 .cards:hover .card-info {
    color: #000000;
    transition: color 1s;
} 

.card_imagen{
    
    width: 80px;
    height: 70px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.card_text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: calc(100% - 80px);
}
`

// SOLO PARA CORREOS VERIFICADO

const Verificado = styled.div`
  * {
    text-decoration: none;
    margin: auto;
    padding: auto;
    color: white;
  }

  .contenedor {
    width: auto;
    height: auto;
    max-height: 300vh;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 0, 1) 100%,
      rgba(0, 0, 0, 1) 100%
    );
    margin-left: auto;
    color: white;
    display: flex;
    position: relative;
    padding-bottom: 0px;
  }
`;
