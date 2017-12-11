import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';
import Team from './Team';

export default class Game extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardTitle title={this.props.game.date} subtitle={this.props.game.network} />
                    <Team team={this.props.game.home} />
                    <Team team={this.props.game.away} />
                </Card>
            </div>
        );
    }
}