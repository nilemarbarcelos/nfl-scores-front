import React, { Component } from 'react';
import Game from './Game';
import { RaisedButton } from 'material-ui';

export default class Week extends Component {
    constructor() {
        super();
        this.state = { games: [], byes: [] };
    }
    
    componentDidMount() {
        const ROOT_URL = 'http://localhost:3001/nfl-scores/2017/1';
        fetch(ROOT_URL)
        .then(response => response.json())
        .then(week => {
            console.log('done ' + JSON.stringify(week));
            this.setState({ games: week.games, byes: week.byes });
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.games.map(game => <Game key={game.home.name} game={game} />)
                }
            </div>
        );
    }
}