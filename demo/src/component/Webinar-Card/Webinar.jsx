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
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.WebinarBild} />
          <Card.Body>
            <Card.Title>{this.props.WebinarTitel}</Card.Title>
            <Card.Text>{this.props.WebinarBeschreinung}</Card.Text>
            <Button variant="primary">Teilnehmen</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default WebinarCard;
