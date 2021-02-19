import "./titlebar.css";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.css";

import React from "react";
import FA from "react-fontawesome";

interface IProps {}

interface IState {
    toggled?: boolean;
}

export default class Titlebar extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { toggled: false };
    }

    componentDidMount() {
        window.addEventListener("scroll", () => this.toggleDropDown(false));
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", () => this.toggleDropDown(false));
    }

    toggleDropDown(state: boolean = false) {
        this.setState({ toggled: state });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        Home
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <FA name="fas fa-bars"/>
                    </button>
                    <div
                        className="navbar-collapse collapse"
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#projects">
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
