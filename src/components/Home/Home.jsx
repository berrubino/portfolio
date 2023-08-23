import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Home/home.css";
import linkedinLogo from "../../assets/linkedinLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";
import emailLogo from "../../assets/emailLogo.svg";

function Home() {
  return (
    <div className="home-container">
      <Container>
        <Row className="presentation-container">
          <Col xs={12} md={6} className="name-profesion">
            <h1 className="name">Bernardo Rubino</h1>
            <h4 className="degree">Full-stack developer</h4>
          </Col>
          <Col xs={12} md={6} className="links-container">
            <div className="image-container">
              <a href="https://www.linkedin.com/in/bernardo-rubino-9b94a1217/">
                <img src={linkedinLogo} alt="linkedin logo" />
              </a>
            </div>
            <div className="image-container">
              <a href="https://github.com/berrubino">
                <img src={githubLogo} alt="github logo" />
              </a>
            </div>
            <div className="image-container">
              <a href="mailto:berni.rubino@gmail.com?subject=Asunto%20del%20correo&body=Escribe%20aquí%20tu%20mensaje">
                <img src={emailLogo} alt="mail Logo" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
