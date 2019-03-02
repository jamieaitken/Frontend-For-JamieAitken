import React, { Component } from 'react';
import CopyrightDate from '../../utilities/CopyrightDate'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Footer.css'

export interface Props {

}

export default class Footer extends Component<Props, object>{

    render()
    {
        return (
            <footer>
                <a href="https://github.com/jamieaitken" target="_blank"><FontAwesomeIcon icon={['fab','github']} size={"3x"}/></a>
                <a href="https://instagram.com/jamie__aitken" target="_blank"><FontAwesomeIcon icon={['fab','instagram']} size={"3x"}/></a>
                <a href="https://www.linkedin.com/in/jamie-aitken-6900b5139/" target="_blank"><FontAwesomeIcon icon={['fab','linkedin']} size={"3x"}/></a>
                <a href="https://twitter.com/Jamie__Aitken" target="_blank"><FontAwesomeIcon icon={['fab','twitter']} size={"3x"}/></a>
                <CopyrightDate year={(new Date).getFullYear()}/>
            </footer>
        );
    }
}