import React, { Component } from 'react'
export default class Item extends Component {

    render() {
        return (

            <div className='item' style={{ backgroundColor: this.props.color }}>

                <p>{this.props.name}</p>
                <img className='image' src={this.props.url} alt='' />
                <p>Attack:{this.props.attack}</p>
                <p>defense:{this.props.defense}</p>
                <p>hp:{this.props.hp}</p>
                <p>speed:{this.props.speed}</p>


            </div>

        )
    }
}
