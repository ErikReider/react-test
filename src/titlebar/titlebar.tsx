import "./titlebar.css";
import "bootstrap";
import "font-awesome/css/font-awesome.css";
// import "jquery";

import React, { Component, MouseEvent } from "react";
import FA from "react-fontawesome";
import { Collapse } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

interface IProps {}

interface IState {
    toggled: boolean;
    longScroll: boolean;
}

export default class Titlebar extends Component<IProps, IState> {
    private lastActive: HTMLElement;

    constructor(props: IProps) {
        super(props);
        this.state = { toggled: false, longScroll: false };

        this.lastActive = document.getElementById("navbar-Home") as HTMLElement;

        $(document).on(
            "click",
            'a.js-scroll-trigger[href*="#"]:not([href="#"])',
            (event: Event) => this.scrollToSection(event)
        );
    }

    componentDidMount() {
        window.addEventListener("scroll", () => this.onScroll());
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", () => this.onScroll());
    }

    onScroll() {
        this.toggleDropDown(false);
        if (window.scrollY > 100 && this.state.longScroll === false) {
            this.setState({ longScroll: true });
        } else if (window.scrollY <= 100 && this.state.longScroll === true) {
            this.setState({ longScroll: false });
        }
    }

    toggleDropDown(state: boolean = false) {
        if (this.state.toggled === state) return;
        this.setState({ toggled: state });
    }

    scrollToSection(event: Event) {
        event.preventDefault();
        const id = (event.target as HTMLAnchorElement).href.split("#")[1];
        const elem = document.getElementById(id) as HTMLElement;
        // Calculate the correct offset to scroll to too create a smooth transition.
        // Without, the transition slams against the bottom when scrolling to Contacts
        let offset = elem.offsetTop - 70;
        if (offset < 0) offset = 0;
        if (elem.offsetTop + elem.clientHeight >= document.body.clientHeight) {
            let min = elem.offsetTop - window.innerHeight + elem.clientHeight;
            if (offset > min) offset = min;
        }

        $("html, body").animate(
            {
                scrollTop: offset,
            },
            1000,
            "easeInOutExpo"
        );
    }

    render() {
        return (
            <nav
                className={
                    "navbar navbar-expand-lg navbar-light fixed-top " +
                    (this.state.longScroll ? "navbar-shrink" : "")
                }
                id="mainNav"
            >
                <div className="container">
                    <a
                        id="navbar-Home"
                        className="navbar-brand js-scroll-trigger"
                        href="#page-top"
                    >
                        Home
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        onClick={() => this.toggleDropDown(!this.state.toggled)}
                    >
                        Menu
                        <FA name="fas fa-bars" />
                    </button>
                    <Collapse in={this.state.toggled}>
                        <div className="navbar-collapse" id="navbarResponsive">
                            <Scrollspy
                                className="navbar-nav ml-auto"
                                currentClassName="active"
                                items={[
                                    "masthead",
                                    "about",
                                    "projects",
                                    "contact",
                                ]}
                                offset={-75}
                            >
                                {/*Dummy span used when at the top of the page*/}
                                <span></span>
                                <a
                                    className="nav-item nav-link js-scroll-trigger"
                                    href="#about"
                                >
                                    About Me
                                </a>
                                <a
                                    className="nav-item nav-link js-scroll-trigger"
                                    href="#projects"
                                >
                                    Projects
                                </a>
                                <a
                                    className="nav-item nav-link js-scroll-trigger"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </Scrollspy>
                        </div>
                    </Collapse>
                </div>
            </nav>
        );
    }
}
