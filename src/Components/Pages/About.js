import "./About.css";
import NavBar from "../NavBar/NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div>
      <NavBar />
      <div className="Background-Padding">
        <Row>
          <Col lg={8} className="About-Col-lg">
            <h1 className="About-h1">My Story</h1>
            <p className="About-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
              eget nunc lobortis mattis aliquam faucibus purus. Cras tincidunt
              lobortis feugiat vivamus at augue. Cras tincidunt lobortis feugiat
              vivamus at. Pellentesque adipiscing commodo elit at imperdiet dui
              accumsan sit amet. Turpis in eu mi bibendum. Pellentesque massa
              placerat duis ultricies lacus sed turpis tincidunt id. Eu
              facilisis sed odio morbi quis commodo. Leo a diam sollicitudin
              tempor id eu nisl nunc mi. Ut enim blandit volutpat maecenas.
              Consectetur a erat nam at. Iaculis urna id volutpat lacus. Morbi
              non arcu risus quis varius quam. Et ultrices neque ornare aenean
              euismod elementum. Dictum non consectetur a erat nam at lectus
              urna duis. Dignissim suspendisse in est ante in nibh mauris cursus
              mattis. Nulla facilisi etiam dignissim diam. Sit amet venenatis
              urna cursus. Faucibus purus in massa tempor nec feugiat nisl
              pretium.
              <br /> <br />
              Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.
              Dictum sit amet justo donec enim diam vulputate ut. Dui faucibus
              in ornare quam viverra orci sagittis eu volutpat. Cursus in hac
              habitasse platea dictumst quisque sagittis. At elementum eu
              facilisis sed odio morbi. At elementum eu facilisis sed odio morbi
              quis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
              velit sed. Nunc aliquet bibendum enim facilisis gravida neque.
              Vestibulum sed arcu non odio euismod lacinia at. Quam pellentesque
              nec nam aliquam sem et tortor consequat id. Pellentesque massa
              placerat duis ultricies lacus sed turpis tincidunt. Neque sodales
              ut etiam sit amet nisl purus in. Porta nibh venenatis cras sed
              felis eget. Diam donec adipiscing tristique risus. Tellus at urna
              condimentum mattis. Fermentum iaculis eu non diam phasellus
              vestibulum lorem sed risus.
            </p>
          </Col>
          <Col sm>
            <div className="Contact-padding">
              <h1 className="About-h1-contact">Contact</h1>
              <br />
              <h3>Example@gmail.com</h3>
              <br />
              <h3>(###)###-####</h3>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
