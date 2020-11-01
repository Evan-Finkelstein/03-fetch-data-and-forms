

import React, { Component } from 'react'
// import Data from './Data.js'
// import DropDown from './DropDown.js'
import fetch from 'superagent';
// import Item from './Item.js';


export default class App extends Component {


    state = {

        pokemon: [],

    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }












    fetchPokemon = async () => {
        let response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.booger}`);

        this.setState({
            pokemon: response.body,


        });

    }




    render() {
        return (
            <div>
                {this.state.pokemon.length === 0
                    ? <div> <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
                        width="480"
                        height="480"
                        frameBorder="0"
                        class="giphy-embed"
                        title='x'
                        allowFullScreen></iframe>
                        <p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg">via GIPHY</a></p></div>
                    : <div key={this.state.pokemon.id}>
                        <p>{this.state.pokemon.pokebase}</p>

                        <img src={this.state.pokemon.url_image} alt={this.state.pokemon.pokemon} width="100" height="100" />

                    </div>
                }
            </div>

        )
    }
}
