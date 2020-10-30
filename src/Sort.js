import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>

                <select onChange={this.props.handleSort}>
                    <option value=''>name</option>
                    <option value='sort'>sort</option>
                    <option value='https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon='>attack</option>
                    <option value='https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon='>speed</option>
                    <option value='https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon='>defense</option>
                    <option value='https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon='>hp</option>


                </select>

                <select onChange={this.props.handleOrder}>
                    <option value='ascending'>low to High</option>
                    <option value='descending'>High to low</option>

                </select>
            </div>
        )
    }
}
