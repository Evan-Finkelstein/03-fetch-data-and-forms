import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div clasName='header'>
                <h1>PokeDex: Gotta Catch Em All!</h1>
                <div clasName='header'><Link to="/">Home</Link>  </div>
                <div clasName='header'><Link to="/pokedex">Pokedex</Link>  </div>

            </div >


        )
    }
}
