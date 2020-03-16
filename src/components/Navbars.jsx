import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import './Navbars.css';

class Navbars extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" variant="light" className="nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/"><label style={{fontWeight: "bold", color: "black"}}>Shopping</label></Nav.Link>
              <Nav.Link href="/hotels"><label style={{fontWeight: "bold", color: "black"}}>Hotels</label></Nav.Link>
              <Nav.Link href="/contact"><label style={{fontWeight: "bold", color: "black"}}>Contact</label></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
