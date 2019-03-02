import React, { Component } from 'react';
import constants from '../../utilities/constants';
import Project from '../Project/Project';

import './ProjectList.css';

export interface Props {

}

export interface BaseProject {
    name: string,
    html_url: string,
    description: string
}

export interface GitHubProject extends BaseProject {
    id: number, 
    created_at: string,
    updated_at: string,
    language: string
}

interface State {
    githubProjects: GitHubProject[]
}

export default class Header extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            githubProjects: []
        }
    }

    chromeStoreProjects = [
        {
            name: 'FriendLister for Facebook',
            html_url: 'https://chrome.google.com/webstore/detail/friendlister-for-facebook/gaimanpopfggnbpmoihmokenhblahpoo',
            description: "Backup your Facebook friends list! See who has deleted you and who you've gained in-between backups"
        }
    ]
    

    getGithubProjects(){
        fetch(constants.basePath + '/integrations/github')
        .then(response => response.json())
        .then(data => this.setState({githubProjects: data.reason}))
    }

    componentDidMount(){
        this.getGithubProjects();
    }

    render(){
        return(
            <section className="activeContent">
                <h3>Projects</h3>
                    <article className="projectList">
                        {this.state.githubProjects.map((githubProject: GitHubProject) => {
                            return (
                                <Project type="github" name={githubProject.name} language={githubProject.language} description={githubProject.description}
                                        url={githubProject.html_url} createdAt={githubProject.created_at}/>
                            );
                        })}
                        {this.chromeStoreProjects.map((chromeProject: BaseProject) => {
                            return (
                                <Project type="chrome" name={chromeProject.name} description={chromeProject.description}
                                        url={chromeProject.html_url}/>
                            );
                        })}
                    </article>
            </section>
        );
    }
}