import "../projects.css";
import "bootstrap/dist/js/bootstrap";

import React from "react";

interface IProps {
    repoURL: string;
    imageURL: string;
    title: string;
    subTitle: string;
    pageURL?: string;
}

interface IState {
    toggled?: boolean;
}

export default class Project extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { toggled: false };
    }

    render() {
        return (
            <div className="featured">
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="imgParent col-xl-8 col-lg-7">
                        <img className="img-fluid mb-lg-0" src={this.props.imageURL} alt="" />
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>{this.props.title}</h4>
                            <p className="text-black-50 mb-0">{this.props.subTitle}</p>
                            <div className="small-container">
                                {this.props.pageURL && (
                                    <div className="btn-parent">
                                        <a
                                            className="btn btn-primary"
                                            rel="noreferrer"
                                            href={this.props.pageURL}
                                            target="_blank"
                                        >
                                            View page
                                        </a>
                                    </div>
                                )}
                                <div className="btn-parent">
                                    <a
                                        className="btn btn-primary"
                                        rel="noreferrer"
                                        href={this.props.repoURL}
                                        target="_blank"
                                    >
                                        View Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
