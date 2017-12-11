import React, { Component } from 'react';
import { CardHeader } from 'material-ui';

export default class Team extends Component {
    render() {
        const container = {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 20,
            marginTop: 20
        }
        const nameStyle = {
            marginLeft: 5,
            fontSize: 20,
        }
        const scoreStyle = {
            fontSize: 20,
            marginTop: 10
        }
        return (   
            <div>
                <div style={container}>
                    <div>
                        <img src={this.props.team.logo}></img>
                        <span style={nameStyle}>{this.props.team.name}</span>
                    </div>
                    <div style={scoreStyle}>
                        {this.props.team.score}
                    </div>
                </div>
            </div>
        );
    }
}