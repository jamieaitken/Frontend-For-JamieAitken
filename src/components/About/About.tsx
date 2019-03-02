import React, { Component } from 'react';

export interface Props {

}

export default class About extends Component<Props, object>{
    render(){
        return (
            <section className="activeContent">
                <h3>Hey Oh</h3>
                <p>My name is Jamie and I&apos;m a Software Engineer working at a <a href="/experience#active">startup</a> based in Edinburgh, Scotland for just over two years now.</p>
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