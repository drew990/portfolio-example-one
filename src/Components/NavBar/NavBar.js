import "./NavBar.css";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <Navbar variant="light">
        <Navbar.Brand className="hover-underline-animation-header Link-style">
          <Link className="link" to="/">
            Home
          </Link>
        </Navbar.Brand>

        <Navbar.Brand className="hover-underline-animation-header Link-style">
          <Link className="link" to="/gallery">
            Gallery
          </Link>
        </Navbar.Brand>

        <Navbar.Brand className="hover-underline-animation-header Link-style">
          <Link className="link" to="/about">
            About
          </Link>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Gallery;
