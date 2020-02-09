import React, { Component } from 'react';
import './Experience.css';
import { Timeline } from 'antd';


export default class Experience extends Component{
    render(){
        return (
            <>
                <Timeline mode="alternate">
                    <Timeline.Item>
                        <h4>Abertay University</h4>
                        <h5>September 2013 - June 2016</h5>
                    </Timeline.Item>
                    <Timeline.Item>
                        <h4>BLACKBX</h4>
                        <h5>January 2017 - July 2019</h5>
                    </Timeline.Item>
                    <Timeline.Item>
                        <h4>iZettle</h4>
                        <h5>July 2019 - Present</h5>
                    </Timeline.Item>
                </Timeline>
            </>
        );
    }
}