import React, { Component } from 'react';
import './Experience.css';


export interface Props {

}

export default class Experience extends Component<Props, object>{
    render()
    {
        return (
            <section className="activeContent">
                <h3>Professional</h3>
                <section id="active">
                    <p>January 2017 - Present</p>
                    <p>BLACK<strong>BX</strong></p>
                    <ul>
                        <li>Started breaking down our Monolith API into smaller services. (Still a WIP 😅)</li>
                        <li>Responsible for the infrastructure of those services</li>
                        <li>3rd Party Integrations (Our Billing Platform and Stripe Connect)</li>
                    </ul>
                </section>
                <h3>Education</h3>
                <section>
                    <p>2013 - 2016</p>
                    <p>Abertay University</p>
                    <p>BSc (Hons) Computing (Second class, Divison 1)</p>
                </section>
            </section>
        );
    }
}