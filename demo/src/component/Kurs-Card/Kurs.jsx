import React, { Component } from "react";
import "./Kurs.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

class KursCard extends Component {
  static defaultProps = {
    KursBild:
      "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
    KursTitel: "Neuer Kurs ohne Titel",
    KursBeschreibung: "Keine Beschreibung verfügbar.",
    KursFortschritt: "0"
  };
  render() {
    return (
      <div className="KursCard">
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={this.props.KursBild} />
          <Card.Body>
            <Card.Title>{this.props.KursTitel}</Card.Title>
            <Card.Text>{this.props.KursBeschreibung}</Card.Text>
            <ProgressBar
              now={this.props.KursFortschritt}
              label={`${this.props.KursFortschritt}%`}
            />
            <br />
            <Button variant="primary">Ansehen</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default KursCard;
