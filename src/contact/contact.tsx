import "./contact.css";
import "bootstrap/dist/js/bootstrap";

import React from "react";

interface IProps {}

interface IState {
    toggled?: boolean;
}

export default class Contact extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { toggled: false };
    }

    render() {
        return (
            <section className="contact-section bg-black" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fab fa fa-linkedin text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">LinkedIn</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">
                                        <a
                                            href="https://www.linkedin.com/in/erik-reider-b8b284191/"
                                            target="_blank"
                                        >
                                            Erik Reider
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa fa-at text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">
                                        <a href="mailto:ereider20010103@gmail.com" target="_blank">
                                            ereider20010103@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fab fa fa-github text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">GitHub</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">
                                        <a href="https://github.com/ErikReider" target="_blank">
                                            Erik Reider
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
