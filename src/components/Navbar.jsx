import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faLock, faPenToSquare, faRightToBracket, faUser,} from '@fortawesome/free-solid-svg-icons'

const element1 = <FontAwesomeIcon icon={faCartShopping} />
const element2 = <FontAwesomeIcon icon={faHouse} />
const element3 = <FontAwesomeIcon icon={faUser} />
const element4 = <FontAwesomeIcon icon={faRightToBracket} />
const element5 = <FontAwesomeIcon icon={faLock} />
const element6 = <FontAwesomeIcon icon={faPenToSquare} />


function Navbar1() {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia</Navbar.Brand>

        <Nav className="ms-auto d-flex gap-2">
          <Button variant="outline-light">
            <i className="fa-solid fa-house me-1"></i> Home
          </Button>

          {token ? (
            <>
              <Button variant="outline-light">
                <i className="fa-solid fa-user me-1"></i> Profile
              </Button>
              <Button variant="outline-light"> 
                <i className="fa-solid fa-lock me-1"></i> Logaut
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline-light" >
                <i className="fa-solid fa-right-to-bracket me-1"></i> Login
              </Button>
              <Button variant="outline-light">
                <i className="fa-solid fa-pen-to-square me-1"></i> Register
              </Button>
            </>
          )}

          <Button variant="outline-light">
            <i className="fa-solid fa-cart-shopping me-1"></i> Total: ${" "}
            {total.toLocaleString("es-CL")}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar1;