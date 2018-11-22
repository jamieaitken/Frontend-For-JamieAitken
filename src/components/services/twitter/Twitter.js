import React, {Component} from 'react'
import paths from '../../../constants'
import integrations from '../../../routes/integrations'

class Twitter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statusCode: 0,
            personalInformation: []
        }
    }

    componentDidMount() {
        fetch(paths.backend + integrations.twitter)
            .then(response => response.json())
            .then(data => this.setState({personalInformation: data.reason.user, statusCode: data.statusCode}))
    }

    render() {
        return (
            <img src={this.state.personalInformation.profile_image_url} alt="profilePic" className={this.props.className}/>
        );
    }
}

export default Twitter