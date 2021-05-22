import "../../App.css";
import "./Home.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../Animations/index";

function Home() {
  return (
    <motion.div
      className="Home"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Row>
        <Col lg className="col-lg-Home">
          <Jumbotron fluid className="Main-img"></Jumbotron>
        </Col>
        <Col lg className="col-lg-Home-Sec">
          <Jumbotron fluid className="Filler-background">
            <h1 className="header">
              Welcome to my Portfolio. <br />
              My Name is Diana Brita
            </h1>
            <h2 className="Sub-Contact">Sweden, Stockholm</h2>
            <h3 className="Sub-Contact">Freelancer Model</h3>
            <h3 className="Sub-Contact">Example@gmail.com</h3>
            <Row>
              <Col>
                <h3 className="hover-underline-animation">
                  <Link className="link" to="/gallery">
                    Gallery
                  </Link>
                </h3>
              </Col>
              <Col className="link">
                <h3 className="hover-underline-animation">
                  <Link className="link" to="/about">
                    About
                  </Link>
                </h3>
              </Col>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </motion.div>
  );
}

export default Home;
