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
import Abii from '../About us/Abii.jpeg';
import Antonio from '../About us/Antonio.jpeg';



function Us() {
    return (

        <AboutContainer id='somos'>
            <div>
                <br />
                <h1 className='text-center text-white'>Así somos</h1>
                 
              
                
               
                <p className='text-center container'>Especialistas en crear contenidos. Investigadores de los lugares más recónditos de Google. Amantes de la gente que escucha buena música. Rápidos hasta donde la calidad no se deteriora. Eficaces en llevar a cabo un plan, tu plan. Y más allá de todo eso, Un TEAM</p>
            </div>
            <br />
            <CardGroup>
                <Card>
                    <img className='img-fluid img-thumbnail  mx-auto d-block' variant="top" src={Bianchi} />
                    <Card.Body>
                        <Card.Title className='text-center'>Bianchi Juan Jose</Card.Title>
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
                        <Card.Title className='text-center'>Rodolfo Alvarez</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/rodolfo-alvarez-montes/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Carlos} />
                    <Card.Body>
                        <Card.Title className='text-center'>Carlos  Da Graça</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/carlos-da-gra%C3%A7a-284049239/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className='img-fluid img-thumbnail text-aling  mx-auto d-block' variant="top" src={Abii} />
                    <Card.Body>
                        <Card.Title className='text-center'>Abigail Cortes</Card.Title>
                        <Card.Text className='text-center'>
                            <div className='container'>
                                Full Stack Developer <a href='https://www.linkedin.com/in/abigail-cortés-sánchez-8252381a3/' target="_blank"><img className='linke' src={Linke} alt="linke" /></a>
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
                        <Card.Title className='text-center'>Felipe Chiquito</Card.Title>
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
                        <Card.Title className='text-center'>Antonio Muelle</Card.Title>
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
                        <Card.Title className='text-center'>Agustin Guerrero</Card.Title>
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
                        <Card.Title className='text-center'>Erick Espinoza</Card.Title>
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

/* .oli{
    height: 16px;
    position: relative;
    top: -19px;
    z-index: 0;
    width: 400px;
    color: #FFFF01;
    background-color: #FFFF01;
    border: #FFFF01 1px solid;
    margin: auto;
} */

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


    
h1 {
  width: 0;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom:10px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  font-size: 2.2rem;
  margin: 0 auto;
  border-right: 0.15em solid #000000;
  animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
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
