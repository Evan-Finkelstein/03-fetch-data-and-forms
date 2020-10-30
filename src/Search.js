import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleSearch} placeholder='search'></input>
                <select onChange={this.props.handleSort}>
                    <option value=''>Sort by</option>
                    <option value='defense'>defense</option>
                    <option value='attack'>attack</option>
                    <option value='speed'>speed</option>
                    <option value='type_1'>defense</option>
                    <option value='hp'>hp</option>


                </select>

                <select onChange={this.props.handleOrder}>
                    <option value='asc'>low to High</option>
                    <option value='desc'>High to low</option>

                </select>


                <button onClick={this.props.handleClick} >Search</button>
            </div >
        )
    }
}