import React, { Component } from 'react';
import CopyrightDate from '../../utilities/CopyrightDate'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Footer.css'

export default class Footer extends Component{

    render() {
        return (
            <footer>
                <a href="https://github.com/jamieaitken" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','github']} size={"3x"}/></a>
                <a href="https://instagram.com/jamie__aitken" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','instagram']} size={"3x"}/></a>
                <a href="https://www.linkedin.com/in/jamie-aitken-6900b5139/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','linkedin']} size={"3x"}/></a>
                <a href="https://twitter.com/Jamie__Aitken" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','twitter']} size={"3x"}/></a>
                <CopyrightDate year={(new Date).getFullYear()}/>
            </footer>
        );
    }
}