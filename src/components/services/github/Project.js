import React, {Component} from 'react';
import ReadableTime from '../../filters/ReadableTime'
import Truncate from 'react-truncate-string'

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

     determineLanguageColor(language) {
        switch (language) {
            case 'HTML':
                return 'badge badge-danger'
            case 'JavaScript':
                return 'badge badge-danger'
            default:
                return 'badge badge-primary'
        }
    }

    render() {
        return (
            <section className="col-4">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <h6 className={this.determineLanguageColor(this.props.language)}>{this.props.language}</h6>
                        <h6 className="card-subtitle mb-2 text-muted"><ReadableTime
                            date={this.props.created_at}></ReadableTime></h6>
                        <p className="card-text"><Truncate text={this.props.description}/></p>
                        <a href={this.props.url} target="_blank"  rel="noopener noreferrer">View Code <span role="img">🔎</span></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project