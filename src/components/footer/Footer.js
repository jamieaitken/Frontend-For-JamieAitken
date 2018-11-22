import React, {Component} from 'react'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'

class Footer extends Component {

    socialMedia = [
        {
            url: 'https://www.instagram.com/jamie__aitken/',
            type: 'Instagram',
            icon: Instagram
        },
        {
            url: 'https://twitter.com/Jamie__Aitken',
            type: 'Twitter',
            icon: Twitter
        },
        {
            url: 'https://www.linkedin.com/in/jamie-aitken-6900b5139/',
            type: 'LinkedIn',
            icon: LinkedIn
        }
    ];

    render() {
        return (
            <ul className="list-inline text-center font-weight-bold">
                {this.socialMedia.map((socialMedia) => {
                    return <li className="list-inline-item">
                        <a href={socialMedia.url} target="_blank"
                           rel="noopener noreferrer">
                            <img className="socialFooterImg" src={socialMedia.icon} alt={socialMedia.type}/>
                        </a>
                    </li>
                })}
            </ul>
        );
    }
}

export default Footer