import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import moment from 'moment'

export interface Props {

}

export default class About extends Component<Props, object>{

    calculateExperience = () =>{
        return `${moment([2017,1,3]).fromNow(true)} experience.`
    }


    render(){
        return (
            <section className="activeContent">
                <h3>Hey Oh</h3>
                <p>My name is Jamie and I&apos;m a Software Engineer with over {this.calculateExperience()} I&apos;m currently working at a <NavLink to="/experience#active" exact>startup</NavLink> based in Edinburgh, Scotland.</p>
                <h3>When I&apos;m Not Working</h3>
                <p>In my spare time, I </p>
                <ul>
                    <li>Binge Netflix (who doesn&apos;t?!)</li>
                    <li>Partake in the odd video game sesh</li>
                    <li>Like gifs of dogs on Reddit and Instagram</li>
                    <li>Stay updated with the Software Industry via Reddit, Medium and A Cloud Guru</li>
                </ul>
            </section>
        )
    };
}