import moment from 'moment';
import React, {Component} from 'react';

class ReadableTime extends Component {

    render(){
        return (
            <p>{moment(this.props.date).format('MMM Do YY')}</p>
        );
    }
}

export default ReadableTime