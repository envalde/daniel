import React, { Component } from "react";
import "./Interface.css";
import KursCard from "../../component/Kurs-Card/Kurs";
import WebinarCard from "../../component/Webinar-Card/Webinar";
import Navigation from "../../component/Navigation-no/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Interface extends Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <div className="Interface section">
          <Container>
            <Row>
              <Col>
                <h2 className="bold title">
                  Hallo {this.props.UserName}, mach da weiter, wo du aufgehört
                  hast
                </h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="subtitle">Startklar zum weiterlernen?</p>
              </Col>
              <Col className="d-flex justify-content-end">
                <a href="#home">
                  Alle verfügbaren Kurse <i class="lni lni-chevron-right"></i>
                </a>
              </Col>
            </Row>
            <Row>
              <Col md>
                <KursCard
                  KursBild="https://images.unsplash.com/photo-1565966245341-5a3f55bbf545?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  KursTitel="Einführung in die Lagerlogistik"
                  KursBeschreibung="In diesem Kursdasd  geht es um die Lagerlogistig inklusive Verwaltung und sowas halt."
                  KursFortschritt="10"
                />
              </Col>
              <Col md>
                <KursCard
                  KursBild="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
                  KursTitel="Einführung in die Arbeitsschutzsicherheit"
                  KursBeschreibung="In diesem Kurs geht es um die Arbeitsschutzsicherheit inklusive"
                  KursFortschritt="82"
                />
              </Col>
              <Col md>
                <KursCard
                  KursBild="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  KursTitel="Office Schulung"
                  KursBeschreibung="Office Schulung für Microsoft Office 365 und alle anderen Versionen auch und open office"
                  KursFortschritt="22"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mt-3">
          <Container>
            <Row>
              <Col>
                <Alert variant="secondary">
                  <span className="alert-text">
                    <b>Zertfizierungen ansehen oder herunterladen</b> - Laden
                    Sie ihre Zertifizierungen herunter oder sehen sie sich diese
                    an.
                  </span>
                  <a href=""> Meine Zertifizierungen</a>
                </Alert>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="webinare section">
          <Container>
            <Row>
              <Col md>
                <h2 className="bold title">
                  Folgende Live Schulungen sind für dich vorgemerkt
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <p className="subtitle">
                  Speicher dir kommende Live Schulungen einfach in deinen
                  Kalender ab.
                </p>
              </Col>
              <Col className="d-flex justify-content-end">
                <a href="#live">
                  Alle verfügbaren Live Schulungen{" "}
                  <i class="lni lni-chevron-right"></i>
                </a>
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
