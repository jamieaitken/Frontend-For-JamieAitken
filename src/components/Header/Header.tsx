import React, { Component } from 'react';
import constants from '../../utilities/constants';
import './Header.css';
import alternateLogo from '../../assets/images/jamie_alt.png';
import {NavLink} from 'react-router-dom';

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
                        <NavLink to="/">About</NavLink>
                    </h2>
                    <h2>
                        <NavLink to="/experience" exact>Experience</NavLink>
                    </h2>
                    <h2>
                        <NavLink to="/projects" exact>Projects</NavLink>
                    </h2>
                </nav>
            </header>
        );
    }
}