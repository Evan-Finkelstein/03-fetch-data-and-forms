
import './App.css';
import React, { Component } from 'react'
import List from './List.js'
import Data from './Data.js'
import Search from './Search.js'
import DropDown from './DropDown.js'
import Sort from './Sort.js'
import Header from './Header';

export default class App extends Component {


  state = {
    filter: '',
    Text: '',
    sortType: '',
    sortOrder: '',
  }



  handleChange = e => {
    this.setState({
      filter: e.target.value,

    })
  }
  handleSort = e => {
    this.setState({
      sortType: e.target.value,

    })

  }

  handleSearch = e => {
    this.setState({
      Text: e.target.value,

    })
  }
  handleClick = e => {
    this.setState({
      filter: this.state.Text,


    })
  }
  handleOrder = e => {
    this.setState({
      sortOrder: e.target.value,


    })



  }
  render() {
    return (
      <div className='main'>
        <Header />
        <div className='search'>
          <Search handleSearch={this.handleSearch}
            handleClick={this.handleClick}
            handleOrder={this.handleOrder}
            Text={this.state.Text} />

          <DropDown
            Data={Data}
            handleChange={this.handleChange}
          />

          <Sort
            Data={Data}
            handleSort={this.handleSort}
            handleOrder={this.handleOrder}

            sort={this.state.sortType}
          />
        </div>


        <List Data={Data}
          filter={this.state.filter}
          sortType={this.state.sortType}
          sortOrder={this.state.sortOrder} />
      </div>
    )
  }
}

