import React, { Component } from 'react'
import Item from './Item.js'


export default class List extends Component {
    render() {
        // const filteredPokemon = this.props.Data.filter((pokemon) => {
        //     if (!this.props.filter) return true;


        //     if (pokemon.pokemon === this.props.filter) return true;
        //     if (pokemon.type_1 === this.props.filter || pokemon.type_2 === this.props.filter) return true;



        //     return false
        // })
        // .sort((a, b) => {
        //     if (this.props.sortType === 'pokebase' && this.props.sortOrder === 'ascending') {
        //         return a.pokebase.localeCompare(b.pokebase)
        //     }
        //     else if (this.props.sortType === 'pokebase' && this.props.sortOrder === 'descending') {
        //         return b.pokebase.localeCompare(a.pokebase)
        //     }
        //     else if (this.props.sortType === 'type_1' && this.props.sortOrder === 'ascending') {
        //         return a.type_1.localeCompare(b.type_1)
        //     }
        //     else if (this.props.sortType === 'type_1' && this.props.sortOrder === 'descending') {
        //         return b.type_1.localeCompare(a.type_1)
        //     }
        //     else if (this.props.sortOrder === 'ascending') {
        //         return a[this.props.sortType] - b[this.props.sortType];
        //     } else {
        //         return b[this.props.sortType] - a[this.props.sortType];
        //     }
        // })
        return (
            <div className='main'>

                {
                    this.props.data.map(pokemon =>
                        <p> <Item
                            url={pokemon.url_image}
                            name={pokemon.pokemon}
                            color={pokemon.color_1}
                            attack={pokemon.attack}
                            defense={pokemon.defense}
                            speed={pokemon.speed}
                            hp={pokemon.hp}
                        />
                        </p>)
                }
            </div>
        )
    }
}
