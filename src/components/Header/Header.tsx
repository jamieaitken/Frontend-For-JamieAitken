import React, { Component } from 'react';
import constants from '../../utilities/constants';
import './Header.css';
import {Avatar} from 'antd';

export interface Props {

}

interface State {
    profileImage: string,
}

export default class Header extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            profileImage: ''
        }
    }

    componentDidMount(){
        fetch(constants.basePath + '/integrations/twitter')
        .then(response => response.json())
        .then(data => this.setState({profileImage: data.reason.user.profile_image_url}))
    }

    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><Avatar size="large" shape="circle" src={this.state.profileImage}/></li>
                        <li><h1>Jamie Aitken</h1></li>
                    </ul>
                </nav>
            </header>
        );
    }
}