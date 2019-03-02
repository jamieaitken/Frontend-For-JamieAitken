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
                    <p>BLACK<strong>BX</strong>s main objective is to increase our customers sales by offering easy-to-use Wi-Fi which in return, our customers capture their customers data and can market to them.</p>
                    <ul>
                        <li>Started breaking down our Monolith API into smaller services</li>
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