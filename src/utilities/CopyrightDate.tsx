import * as React from 'react';

export interface Props {
   year: number 
}

export default class CopyrightDate extends React.Component<Props, object>{
    render()
    {
        const {year} = this.props;
        return (
            <p><strong>Jamie Aitken&copy; {year}</strong></p>
        )
    }
}