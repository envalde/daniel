import React, { Component } from "react";
import "./Kurs.css";
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
        <img className="KursCard-bild" src={this.props.KursBild} alt="" />
        <h3 className="KursCard-titel">{this.props.KursTitel}</h3>
        <p className="KursCard-beschreibung">{this.props.KursBeschreibung}</p>
        <p className="KursCard-fortschritt">
          <ProgressBar
            now={this.props.KursFortschritt}
            label={`${this.props.KursFortschritt}%`}
          />
        </p>
        <Button variant="primary">Ansehen</Button>{" "}
      </div>
    );
  }
}

export default KursCard;
