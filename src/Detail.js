

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

                    :
                    <section>
                        <div className='card' key={this.state.pokemon.id}>
                            <p>{this.state.pokemon.pokebase}</p>
                            <img src={this.state.pokemon.url_image} alt={this.state.pokemon.pokemon} width="100" height="100" />
                            <p>Type:{this.state.pokemon.type_1}, {this.state.pokemon.type_2}</p>

                            <p>Attack: {this.state.pokemon.attack}</p>
                            <p>Special Attack: {this.state.pokemon.special_attack}</p>
                            <p>Defense: {this.state.pokemon.defense}</p>
                            <p>Special Defense: {this.state.pokemon.special_defense}</p>
                            <p>HP: {this.state.pokemon.hp}</p>
                            <p>Speed: {this.state.pokemon.speed}</p>
                            <p>Ability: {this.state.pokemon.ability_1}</p>

                        </div>
                    </section>
                }
            </div>

        )
    }
}
