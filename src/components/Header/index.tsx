import * as React from 'react';
import {  Nav } from 'react-bootstrap';

function Header() {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <Nav>
            <Nav.Link href="/home" className="nav-link scrollto active">
              <i className="bx bx-home"></i> <span>Home</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about" className="nav-link scrollto">
              <i className="bx bx-user" /> <span>About</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/resume" className="nav-link scrollto">
              <i className="bx bx-file-blank" /> <span>Resume</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link scrollto">
              <i className="bx bx-book-content" /> <span>Portfolio</span>
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link href="/contact" className="nav-link scrollto">
              <i className="bx bx-envelope" /> <span>Contact</span>
            </Nav.Link>
          </Nav>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
