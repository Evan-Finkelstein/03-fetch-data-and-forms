import React, { Component } from 'react'
// import Data from './Data.js'
export default class DropDown extends Component {
    nameSet = [...new Set(this.props.Data.map(item => item.pokemon))]
    typeSet = [...new Set(this.props.Data.map(item => item.type_1))]
    typeSet2 = [...new Set(this.props.Data.map(item => item.type_2))]
    render() {


        return (
            <div>
                <section>
                    <select onChange={this.props.handleChange} >
                        <option value=''>Show All</option>
                        {this.props.Data.map(option =>
                            <option value={option}>{option}</option>)}



                        {this.typeSet.map(option =>
                            <option value={option}>{option}</option>)}
                        {this.typeSet2.map(option =>
                            <option value={option}>{option}</option>)}
                    </select>


                </section>
            </div>
        )
    }
}
