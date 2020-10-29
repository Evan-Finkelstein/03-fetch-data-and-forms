import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleSearch}></input>


                <button onClick={this.props.handleClick} value={this.props.Text}>Search</button>
            </div >
        )
    }
}
