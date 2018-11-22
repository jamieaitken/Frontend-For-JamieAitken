import React, {Component} from 'react';
import paths from '../../../constants'
import integrations from '../../../routes/integrations'
import Project from './Project'

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch(paths.backend + integrations.github)
            .then(response => response.json())
            .then(data => this.setState({projects: data.reason}))
    }

    render() {
        return (
            <section className="row">
                {this.state.projects.map((project) => {
                    return (
                        <Project name={project.name} language={project.language} description={project.description}
                                 url={project.html_url} created_at={project.created_at}/>
                    );
                })}
            </section>
        );
    }
}

export default Projects