import React, { Component } from 'react';
import Game from './Game';
import { RaisedButton } from 'material-ui';

export default class Week extends Component {
    constructor() {
        super();
        this.state = { games: [], byes: [] };
    }
    
    componentDidMount() {
        // const ROOT_URL = 'http://localhost:3001/nfl-scores/2017/1';
        const ROOT_URL = 'https://scores-nfl.herokuapp.com/nfl-scores/2017/1'; 
        fetch(ROOT_URL)
        .then(response => response.json())
        .then(week => {
            console.log('done ' + JSON.stringify(week));
            this.setState({ games: week.games, byes: week.byes });
        })
    }

    render() {
        const style = {
            textAlign: 'center',
            backgroundColor: '#e7e7e7'
        };
        return (
            <div style={style} >
                {
                    this.state.games.map(game => <Game key={game.home.name} game={game} />)
                }
            </div>
        );
    }
}