import React, { Component } from 'react';
import constants from '../../utilities/constants';
import './Header.css';
import alternateLogo from '../../assets/images/jamie_alt.png';

export interface Props {

}

interface State {
    profileImage: string,
    profileImageHover: boolean
}

export default class Header extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            profileImage: '',
            profileImageHover: false
        }
    }

    componentDidMount(){
        fetch(constants.basePath + '/integrations/twitter')
        .then(response => response.json())
        .then(data => this.setState({profileImage: data.reason.user.profile_image_url}))
    }

    onHover = () => {
        this.setState({profileImageHover:true})
    }

    onHoverLeave = () =>{
        this.setState({profileImageHover: false})
    }

    render(){
        return(
            <header>
                <nav>
                    <img src={this.state.profileImageHover ? alternateLogo : this.state.profileImage} className="profilePicture" onMouseEnter={this.onHover} onMouseLeave={this.onHoverLeave}/>
                    <h2>
                        <a href="/">About</a>
                    </h2>
                    <h2>
                        <a href="/experience">Experience</a>
                    </h2>
                    <h2>
                        <a href="/projects">Projects</a>
                    </h2>
                </nav>
            </header>
        );
    }
}