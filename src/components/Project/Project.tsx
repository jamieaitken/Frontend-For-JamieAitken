import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Project.css';

export interface Props {
    type: string
    name: string
    language?: string
    description: string
    url: string
    createdAt?: string
}

export default class Project extends Component<Props, object>{

    getProjectTypeIcon(){
        if(this.props.type === 'github'){
            return <a href={this.props.url} target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size={"2x"}/></a> 
        } else if(this.props.type === 'chrome'){
            return <a href={this.props.url} target="_blank"><FontAwesomeIcon icon={['fab', 'chrome']} size={"2x"}/></a> 
        }
    }

    getLanguageBadge(){
        let language:string = ''
        if(this.props.type === 'chrome'){
            language = 'JavaScript';
        } else {
            language = this.props.language!
        }
                
        let classNameLang = "language-badge"
        
        if(language === 'JavaScript'){
            classNameLang += ' javascript';
        }else if(language === 'PHP'){
            classNameLang += ' php'
        }

        return <p className={classNameLang}>{language}</p>
    }

    render(){
        return (
            <article className="project">
                <h4>{this.props.name}</h4>
                {this.getProjectTypeIcon()}
                {this.getLanguageBadge()}
                <p>{this.props.description}</p>
            </article>
        );
    }
}