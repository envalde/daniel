import React, { Component } from "react";
import "./Interface.css";
import KursCard from "../../component/Kurs-Card/Kurs";
import WebinarCard from "../../component/Webinar-Card/Webinar";
import Navigation from "../../component/Navigation-no/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Interface extends Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <div className="Interface">
          <Container>
            <Row>
              <Col>
                <h2 className="bold Interface-heading">
                  Hallo {this.props.UserName}, folgende Kurse sind für dich
                  verfügbar
                </h2>
                <p>Hier hast du all deine Kurse und Lektionen im Blick</p>
              </Col>
            </Row>
            <Row>
              <Col md>
                <KursCard
                  KursBild="https://images.unsplash.com/photo-1565966245341-5a3f55bbf545?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  KursTitel="Einführung in die Lagerlogistik"
                  KursBeschreibung="In diesem Kurs geht es um die Lagerlogistig inklusive Verwaltung und sowas halt."
                  KursFortschritt="10"
                />
              </Col>
              <Col md>
                <KursCard />
              </Col>
              <Col md>
                <KursCard />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="webinare">
          <Container>
            <Row>
              <Col md>
                <h2 className="bold Interface-heading">
                  Folgende Live Schulungen sind für dich vorgemerkt
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md>
                <WebinarCard WebinarBild="https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
              </Col>
            </Row>
          </Container>
        </div>
        ;
      </>
    );
  }
}

export default Interface;
