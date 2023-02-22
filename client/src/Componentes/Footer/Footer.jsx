import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import facebook from './facebook.png'
import youtube from './youtube.png'
import github from './github.png'
import henrymusic from './musichenry.png'

const Footer = () => {
    return (
        <>
            <Div>
                <footer className='footer'>
                    <div className='footer_content'>
                        <div className='d-flex justify-content-center container-fluid'>
                            <h3 className='footer_title'>HenryMusic  <img className='henry' src={henrymusic} alt="fotico" /></h3>
                        </div>
                        <ul className='socials'>
                            <li>
                                <Link to={"https://www.facebook.com/profile.php?id=100089871790200"} target="_blank" className='socials_link'>
                                    <img src={facebook} alt="facebook" />
                                </Link>
                            </li>

                            <li>
                                <Link to={"https://www.youtube.com/@henrymusic9010"} target="_blank" className="socials_link">
                                    <img src={youtube} alt="youtube" />
                                </Link>
                            </li>

                            <li>
                                <Link to={"https://github.com/juanxp1/henryMusic"} target="_blank" className="socials_link">
                                    <img src={github} alt="git" />
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <p>&copy; 2023 HenryMusic</p>
                        </div>
                    </div>
                </footer>
            </Div>
        </>
    )
}

export default Footer

const Div = styled.div`

.henry {
    height: 100px;
    width: 100px;
    margin: 0;
    padding: 0;
}

img{
    width: 30px;
}

.footer{
    padding: 60px; 
    background-color: black;
    text-align: center;
    color: white;
    height: 35vh;
}
.footer_content{
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;

}
.footer_content p {
    margin: 0;
}
h4{
    color: #ffffff;
    font-weight: 300;
}    
h4 span{
    font-weight:bold;
}

.socials{
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;

}
.socials_link{
    text-decoration: none;
    color: white;
    padding: 5px 10px;
}

`