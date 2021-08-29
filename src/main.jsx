/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description React entry point
 * @process 1
 */

import ReactDOM from "react-dom";
import App from "./App";
import "./sass/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
