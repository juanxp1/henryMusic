import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styled from 'styled-components'
import Bianchi from '../About us/bianchi.jpg';
import Felipe from '../About us/felipe.jpg';
import Rodolfo from '../About us/rodolfo.jpg';
import Erick from '../About us/erick.jpg';
import Agustin from '../About us/agustin.jpg';
import Linke from '../About us/linke.png';
import Git from '../About us/github.png'
import Carlos from '../About us/carlos.jpg';
import Abigail from '../About us/abigail.jpeg';
import Antonio from '../About us/Antonio.jpeg';



function Us() {
    return (

        <AboutContainer>
            <div>
                <br />
                <h1 className='text-center'>Así somos</h1>
                <p className='text-center container'>Especialistas en crear contenidos. Investigadores de los lugares más recónditos de Google. Amantes de la gente que escucha buena música. Rápidos hasta donde la calidad no se deteriora. Eficaces en llevar a cabo un plan, tu plan. Y más allá de todo eso, Un TEAM</p>
            </div>
            <br />
            <CardGroup>
                <Card>
                    <img className='img-fluid img-thumbnail  mx-auto d-block' variant="top" src={Bianchi} />
                    <Card.Body>
                        <Card.Title className='text-center'>Bianchi</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>

                                Full Stack Developer <a href='https://www.linkedin.com/in/juan-jose-bianchi-928b8416a/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Rodolfo} />
                    <Card.Body>
                        <Card.Title className='text-center'>Rodolfo</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/juan-jose-bianchi-928b8416a/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Carlos} />
                    <Card.Body>
                        <Card.Title className='text-center'>Carlos</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/juan-jose-bianchi-928b8416a/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Abigail} />
                    <Card.Body>
                        <Card.Title className='text-center'>Abigail</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/juan-jose-bianchi-928b8416a/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Felipe} />
                    <Card.Body>
                        <Card.Title className='text-center'>Felipe</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/juan-jose-bianchi-928b8416a/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Antonio} />
                    <Card.Body>
                        <Card.Title className='text-center'>Antonio</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/erick-espinoza-g%C3%B3mez-58b9b8231/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Agustin} />
                    <Card.Body>
                        <Card.Title className='text-center'>Agustin</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/agust%C3%ADn-guerrero-66700721b/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Erick} />
                    <Card.Body>
                        <Card.Title className='text-center'>Erick</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/juan-jose-bianchi-928b8416a/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>
            </CardGroup>
        </AboutContainer>
    )
}

export default Us

const AboutContainer = styled.div`

.linke{
    width: 30px;
    height: 30px;
    margin-bottom:5px
}

.git{
    width: 30px;
    height: 30px;
    margin-bottom:22px
}

h1{
    padding-top: 10px;
    text-decoration: underline 4px solid #FFFF01;
    color: #ffffff;
    font-weight: 600;
    padding-top: 10px;
}

img{
  width: 200px;
  border-radius: 100%;
  margin-top: 0px;
  padding: 0;
  background-color: #FFFF01;
  height: 200px;
  border: 0.5px solid black
  
}

 .card {
 
   background-color: black;

 }



 color: #ffffff;
 background-color: black;

 p {

    font-size: 19px;
 }

 /* @import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');

 font-family: 'Sen', sans-serif; */


`
