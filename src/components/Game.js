import React, { Component } from 'react';
import { Paper, CardTitle, Divider } from 'material-ui';
import Team from './Team';

export default class Game extends Component {

    render() {
        const style = {
            height: 320,
            width: 250,
            margin: 20,
            paddingLeft: 20,
            paddingRight: 20,
            textAlign: 'center',
            display: 'inline-block',
          };

          const teamStyle = {
              textAlign: 'left'
          }

        return (
            <Paper style={style} zDepth={3}>
                <CardTitle title={this.props.game.date} subtitle={this.props.game.network} />
                <Divider />
                <div style={teamStyle}>
                    <Team team={this.props.game.home} />
                    <Team team={this.props.game.away} />
                </div>
                <Divider />
                <CardTitle title={this.props.game.time} />
            </Paper>
        );
    }
}