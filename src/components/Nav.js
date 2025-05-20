import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "./Nav.css";
import dent from "../assets/dent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navs = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={dent} title="Dentcity" id="dentist1" alt="" />
          <h1 id="text">DenTcity</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Home" className="home">Home</Link>
            <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/Login">Login or register</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#about">about us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                <Link to="/Booking">make appointment</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
            </NavDropdown>

            <Link to="/Contact" className="cont">contact us</Link>
            <Nav.Link href="#Home">
              search
              <FontAwesomeIcon id="search" icon={faSearch} />
            </Nav.Link>
            <Nav.Link href="#home">
              <div id="btn1">
                <button>
                  <Link to="/Booking">Appointment</Link>
                  <span>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </span>
                </button>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navs;
