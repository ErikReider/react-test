import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Titlebar from "./titlebar/titlebar";
import Head from "./head/head";
import About from "./about/about";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

document.body.id = "page-top";

ReactDOM.render(
    <div>
        <Titlebar />
        <Head />
        <About />
        <Projects />
        <Contact />
    </div>,
    document.getElementById("root")
);
