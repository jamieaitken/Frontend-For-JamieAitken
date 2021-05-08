import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './SocialLinks.css'

export interface Props {

}

interface State {
}

export default class SocialLinks extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }


    render() {
        return (
            <>
                <a className="social-link" href="https://github.com/jamieaitken" target="_blank"
                   rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size={"3x"}/></a>
                <a className="social-link" href="https://instagram.com/jamie__aitken" target="_blank"
                   rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} size={"3x"}/></a>
                <a className="social-link" href="https://www.linkedin.com/in/jamie-aitken-6900b5139/" target="_blank"
                   rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} size={"3x"}/></a>
                <a className="social-link" href="https://twitter.com/Jamie__Aitken" target="_blank"
                   rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} size={"3x"}/></a>
            </>
        )
    }
}