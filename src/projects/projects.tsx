import "./projects.css";
import "bootstrap/dist/js/bootstrap";
import Project from "./project/project";

import projectJSON from "../assets/projects.json";

import React from "react";

interface IProps {}

interface IState {
    toggled?: boolean;
}

export default class Projects extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { toggled: false };
    }

    getProjects() {
        const proj: JSX.Element[] = [];
        for (const i in projectJSON) {
            const p = projectJSON[i];
            proj.push(
                <Project
                    key={i}
                    imageURL={p.imageURL}
                    title={p.title}
                    subTitle={p.subTitle}
                    repoURL={p.repoURL}
                    pageURL={p.pageURL ?? ""}
                />
            );
        }
        return proj;
    }

    render() {
        return (
            <section className="projects-section" id="projects">
                <div className="container">
                    <h1>Projects</h1>
                    {this.getProjects()}
                </div>
            </section>
        );
    }
}
