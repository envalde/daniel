import React, { Component } from "react";
import "./Webinar.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class WebinarCard extends Component {
  static defaultProps = {
    WebinarTitel: "Kein Titel",
    WebinarBeschreinung: "Keine Beschreinung für dieses Webinar verfügbar."
  };
  render() {
    return (
      <div className="WebinarCard">
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={this.props.WebinarBild} />
          <Card.Body>
            <Card.Title>{this.props.WebinarTitel}</Card.Title>
            <Card.Text>{this.props.WebinarBeschreinung}</Card.Text>
            <Button variant="primary">
              Teilnehmen oder im Kalender vormerken
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default WebinarCard;
