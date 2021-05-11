import React, {Component} from 'react';
import constants from '../../utilities/constants';
import './Header.css';
import Image from 'react-bootstrap/Image'
import moment from "moment";
import SocialLinks from "../SocialLinks/SocialLinks";


export interface Props {

}

interface State {
    profileImage: string,
}

export default class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            profileImage: ''
        }
    }

    calculateExperience = () => {
        return `${moment([2017, 1, 3]).fromNow(true)} experience`
    }

    componentDidMount() {
        fetch(constants.basePath + '/integrations/twitter')
            .then(response => response.json())
            .then(data => this.setState({profileImage: data.profileImageURLHTTPS}))
    }

    render() {
        return (
            <section className="about-container">
                <Image src={this.state.profileImage} className="about-image" roundedCircle/>
                <div className="about-information">
                    <h1>
                        <span role="img" aria-label="waving emoji">👋👋👋</span>
                    </h1>
                    <p>I&apos;m a Software Engineer with {this.calculateExperience()} and currently working at
                        Zettle By PayPal in Edinburgh, Scotland.</p>
                    <div className="about-social">
                        <SocialLinks/>
                    </div>
                </div>
            </section>
        );
    }
}