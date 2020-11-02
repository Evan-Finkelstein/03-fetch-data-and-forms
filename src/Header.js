import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>PokeDex: Gotta Catch Em All!</h1>
                <div className='link'><Link to="/">Home</Link>  </div>
                <div className='link'><Link to="/pokedex">Pokedex</Link>  </div>

            </div >


        )
    }
}
