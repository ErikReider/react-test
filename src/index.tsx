import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Titlebar from "./titlebar/titlebar";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

document.body.id = "page-top";

ReactDOM.render(
    <React.StrictMode>
        <Titlebar />
    </React.StrictMode>,
    document.getElementById("root")
);
