import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>

                <select onChange={this.props.handleSort}>
                    {/* <option value=''>Sort By:</option> */}
                    <option value='type_1'>type</option>
                    <option value='attack'>attack</option>
                    <option value='speed'>speed</option>
                    <option value='defense'>defense</option>
                    <option value='hp'>hp</option>

                </select>

                <select onChange={this.props.handleOrder}>
                    <option value='ascending'>low to High</option>
                    <option value='descending'>High to low</option>

                </select>
            </div>
        )
    }
}
