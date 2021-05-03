import "./Gallery.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../NavBar/NavBar";
import Image from "react-bootstrap/Image";

import Flower from "./Gallery Images/Flower.jpg";
import FlowerTruck from "./Gallery Images/FlowerTruck.jpg";
import DownLook from "./Gallery Images/DownLook.jpg";
import PartnerPic from "./Gallery Images/PartnerPic.jpg";
import FlowerAir from "./Gallery Images/FlowerAir.jpg";
import FlowerAirLaugh from "./Gallery Images/FlowerAirLaugh.jpg";
import LookCam from "./Gallery Images/LookCam.jpg";
import LookDownCam from "./Gallery Images/LookDownCam.jpg";

function Gallery() {
  return (
    <div className="page">
      <NavBar />
      <div className="Background-Padding">
        <Row sm>
          <Col lg className="Gallery-Col">
            <Image src={Flower} className="Gallery-Img" />
          </Col>

          <Col lg className="Gallery-Col">
            <Image src={FlowerTruck} className="Gallery-Img-2" />
          </Col>
          <Col lg className="Gallery-Col">
            <Image src={PartnerPic} className="Gallery-Img-2" />
          </Col>
          <Col lg className="Gallery-Col">
            <Image src={DownLook} className="Gallery-Img-3" />
          </Col>
        </Row>
        <Row>
          <Col lg className="Gallery-Col">
            <Image src={FlowerAir} className="Gallery-Img" />
          </Col>
          <Col lg className="Gallery-Col">
            <Image src={LookDownCam} className="Gallery-Img-3" />
          </Col>
          <Col lg className="Gallery-Col">
            <Image src={LookCam} className="Gallery-Img-2" />
          </Col>
          <Col lg className="Gallery-Col">
            <Image src={FlowerAirLaugh} className="Gallery-Img-3" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Gallery;
