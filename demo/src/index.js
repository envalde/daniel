import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Interface from "./module/Akademie-Interface/Interface";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Interface UserName="Max" />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
