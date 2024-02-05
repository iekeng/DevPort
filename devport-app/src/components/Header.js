import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FaGhost } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Header({loggedIn}) {
    return (
        <Navbar bg="light" expand="lg" className='mb-1'>
        <Container>
          <Navbar.Brand href="/">
            <h1>DevPort</h1>
          </Navbar.Brand>
          <Nav>
            { loggedIn ? 
            <Image roundedCircle /> :
            <Nav.Link as={NavLink} to="/SignUp"><FaGhost size={25}/></Nav.Link>    
            }
          </Nav>
        </Container>
      </Navbar>
    )
}