import React, { Component } from 'react';
import moment from 'moment'
import Experience from '../Experience/Experience';

export interface Props {

}

export default class About extends Component<Props, object>{

    calculateExperience = () =>{
        return `${moment([2017,1,3]).fromNow(true)} experience`
    }


    render(){
        return (
            <>
                <section className="block">
                    <h3>Hey Oh</h3>
                    <p>I&apos;m a Software Engineer with {this.calculateExperience()} and currently working at iZettle in Edinburgh, Scotland.</p>
                </section>               
                <section className="block">
                    <Experience/>
                </section>
            </>

        )
    };
}