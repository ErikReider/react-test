import "./about.css";
import "bootstrap/dist/js/bootstrap";

import React from "react";

import aboutJSON from "../assets/about.json";

interface IProps {}

interface IState {
    toggled?: boolean;
}

export default class About extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { toggled: false };
    }

    getEducation() {
        const edu: JSX.Element[] = [];
        for (const i in aboutJSON.education) {
            if (Object.prototype.hasOwnProperty.call(aboutJSON.education, i)) {
                const element = aboutJSON.education[i];
                edu.push(
                    <div key={i}>
                        <h4>{element.title}</h4>
                        <p className="edu">{element.description}</p>
                    </div>
                );
            }
        }
        return edu;
    }

    getListOfStrings(list: string[]) {
        let str = "";
        for (const i in list) {
            str += list[i] + ", ";
        }
        return <p className="text-white-50">{str.slice(0, -2)}</p>;
    }

    render() {
        return (
            <section className="about-section text-center" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-white mb-4">About me</h2>
                            <p className="text-white-50">{aboutJSON.about_me}</p>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-white mb-4">Education</h2>
                            {this.getEducation()}
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-white mb-4">Skills</h2>
                            <h5>Programming languages</h5>
                            {this.getListOfStrings(aboutJSON.skills.languages)}
                            <h5>Tools</h5>
                            {this.getListOfStrings(aboutJSON.skills.tools)}
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-white mb-4">Workflow</h2>
                            {this.getListOfStrings(aboutJSON.workflow)}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
