import React from "react";
import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <>
        <div className="Navigation">
          <Navbar bg="" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <strong>Akademie</strong>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Startseite</Nav.Link>
                  <Nav.Link href="#link">Kurse</Nav.Link>
                  <NavDropdown title="Mehr" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Account Verwaltung
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Hilfe und Support
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="top-navigation">
          <Container>
            <Row>
              <Col>
                <ul className="Menu-items">
                  <li>
                    <i className="lni lni-code"></i>Programmieren
                  </li>
                  <li>
                    <i className="lni lni-bookmark"></i>Gespeicherte Kurse
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Navigation;
