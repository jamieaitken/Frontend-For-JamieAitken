import React, {Component} from 'react'
import Twitter from '../services/twitter/Twitter'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <figure className="text-center mt-3">
                <Twitter className="figure-img img-thumbnail rounded-circle"/>
                <figcaption className="figure-caption">
                    <h1>Jamie Aitken</h1>
                    <p><span role="img" aria-label="laptop emoji">💻</span> Software Engineer at <a href="https://blackbx.io" target="_blank" className="badge badge-dark"  rel="noopener noreferrer">BLACK<span className="font-weight-bold">BX</span></a></p>
                    <p><span role="img" aria-label="pin emoji">📍</span> Edinburgh</p>
                </figcaption>
            </figure>
        );
    }
}

export default Header