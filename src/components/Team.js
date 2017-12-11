import React, { Component } from 'react';
import { CardHeader } from 'material-ui';

export default class Team extends Component {
    render() {
        return (
            <CardHeader
                title={ this.props.team.name + ' ' + this.props.team.score }
                subtitle={ this.props.team.record }
                avatar={ this.props.team.logo }
            />
        );
    }
}