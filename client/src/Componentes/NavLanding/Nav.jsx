import React from 'react'
import foto from '../NavLanding/favi.png'
import Login from '../Login/Login'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logout from '../Logout/Logout'

function Nav() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={foto}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                      
                        <Login />
                        <Logout />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Nav