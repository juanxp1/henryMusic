import React from 'react'
import styled from 'styled-components'
import home from './home.png'
import foto from '../Nav-Vertical/app.png'
import lupa from './lupa.png'
import listas from './listas.png'
import crear from './crear.png'
import cora from './cora.png'
import play from './play.mp4'
import mas from './mas.png'




function Navertical() {
  return (


    <Div >
      <div className='nav'>

        <div className="sidebar ">
          <div className="logo d-flex justify-content-center">
            <a className='fotaso' href="/">
              <video className='fotasa' src={play} alt="logo" autoPlay loop muted  />
            </a>

          </div>
          <div className="navigation">
            <ul>
              <li>
                <a href="#">
                  <span className="fa fa-home"><img className='home' src={home} alt="home" /></span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-search"><img className='home' src={lupa} alt="home" /></span>
                  <span>Search</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fas fa-book"><img className='home' src={listas} alt="home" /></span>
                  <span>Your Library</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="fa fas fa-plus-square"><img className='home' src={crear} alt="home" /></span>
                  <span>Create Playlist</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fas fa-heart"><img className='home' src={cora} alt="home" /></span>
                  <span>Liked Songs</span>
                </a>
              </li>
              <li>
                <a href="/new">
                  <span className="fa fas fa-heart"><img className='home' src={mas} alt="home" /></span>
                  <span>New Song</span>
                </a>
              </li>

              <hr />
            </ul>
          </div>
        </div>
      </div>
    </Div>




  )
}

export default Navertical

const Div = styled.div`

.fotasa {
  width: 140px;
}



.sidebar .logo img {
 height: 100px;
}


.home{
  width: 23px;
}

hr {
  border: 1px solid #FFFF01;
}
 
.sidebar {    
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 230px;
  background-color: #000000;
  padding: 24px;
  padding-left: 0;

}



.sidebar .navigation ul {
  list-style: none;
  margin-top: 0px;
  padding-top: 0px;
  padding-bottom: 0px; 
}
.sidebar .navigation ul li {
  padding: 10px 0px;
}
.sidebar .navigation ul li a {
  color: #cfcece;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;

  
}
.sidebar .navigation ul li a:hover,
.sidebar .navigation ul li a:active,
.sidebar .navigation ul li a:focus {
  color: #ffffff;
}
.sidebar .navigation ul li a:hover .fa,
.sidebar .navigation ul li a:active .fa,
.sidebar .navigation ul li a:focus .fa {
  color: #b3b3b3;
}
.sidebar .navigation ul li .fa {
  font-size: 20px;
  margin-right: 10px;
}
.sidebar .navigation ul li a:hover .fa:hover,
.sidebar .navigation ul li a:hover .fa:active,
.sidebar .navigation ul li a:hover .fa:focus {
  color: #ffffff;
}
.sidebar .policies {
  position: absolute;
  bottom: 100px;
}
.sidebar .policies ul {
  list-style: none;
}
.sidebar .policies ul li {
  padding-bottom: 5px;
}
.sidebar .policies ul li a {
  color: #b3b3b3;
  font-weight: 500;
  text-decoration: none;
  font-size: 10px;

}
.sidebar .policies ul li a:hover,
.sidebar .policies ul li a:active,
.sidebar .policies ul li a:focus {
  text-decoration: underline;
}

ul {

  padding-top: 40px;
}


`