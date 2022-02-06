import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import AbhiPic from "./Images/abhi.jpg";

// THIS PAGE IS FOR THE CREATORE OF THIS WEBSITE

const AboutUs = () => {
  return (
    <>
      <div style={{ paddingTop: "60px", margin: "5px" }}>
        <h1>About Us</h1>
        <br />

        <Container>
          <Row
            style={{
              backgroundColor: "lightblue",
              padding: "15px",
              borderRadius: "7px",
            }}
          >
            <Col md={2}>
              <Image
                src={AbhiPic}
                width="80"
                height="80"
                alt="Abhishek Singh"
                roundedCircle
              />
            </Col>
            <Col>
              <p>
                <b>Abhishek Singh</b> |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/abhishek110800"
                >
                  <b>LinkedIn</b>
                </a>{" "}
                <br />
                Roll No. - 1900290130007 <br /> Email - abhishek.1923it1146@kiet.edu{" "}
              </p>
            </Col>
          </Row>

          <div style={{ margin: "10px" }}> &nbsp; </div>
        </Container>
      </div>
      <div
        className="footer"
        style={{ position: "relative", bottom: "-365px" }}
      >
        <footer style={{ padding: "15px" }}>
          Copyright &copy; MusicMelody 2020 - 2021 <br /> Email-
          s.abhi362singh@gmail.com
        </footer>
      </div>
    </>
  );
};

export default AboutUs;