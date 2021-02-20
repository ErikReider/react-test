import "./head.css";
import "bootstrap/dist/js/bootstrap";

import React from "react";

interface IProps {}

interface IState {
    toggled?: boolean;
}

export default class Head extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { toggled: false };
    }

    render() {
        return (
            <header className="masthead" id="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 mb-5">Erik Reider</h1>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">
                            More about me
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
