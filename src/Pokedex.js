

import React, { Component } from 'react'
import List from './List.js'
// import Data from './Data.js'
import Search from './Search.js'
// import DropDown from './DropDown.js'
import fetch from 'superagent';
// import Item from './Item.js';


export default class App extends Component {


  state = {
    filter: '',
    text: '',
    sortText: '',
    sortType: '',
    sortOrder: '',
    data: [],
  }

  componentDidMount = async () => {
    await this.fetchPokemon();
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
      text: e.target.value,

    })
  }
  handleClick = async (e) => {

    await this.fetchPokemon();


  }
  handleOrder = e => {
    this.setState({
      sortOrder: e.target.value,


    })
  }
  fetchPokemon = async () => {
    let response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.text}&sort=${this.state.sortType}&direction=${this.state.sortOrder}&perPage=1500`);

    this.setState({ data: response.body.results });

  }


  render() {
    return (
      <div className='main'>

        <div className='search'>
          <Search handleSearch={this.handleSearch}
            handleClick={this.handleClick}
            handleSort={this.handleSort}
            handleOrder={this.handleOrder}
            Text={this.state.text} />
          {/* 
          <DropDown
            Data={this.state.data}
            handleChange={this.handleChange}
          /> */}

          {/* <Sort
            Data={this.state.data}
            handleSort={this.handleSort}
            handleOrder={this.handleOrder}

            sort={this.state.sortType}
          /> */}
        </div>
        {
          // JSON.stringify(this.state.data)
          // this.state.data.map(item =>
          //   <img src={item.url_image} alt='' />)
        }
        {

          this.state.data.length === 0
            ? <div> <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
              width="480"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              title='x'
              allowFullScreen></iframe>
              <p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg">via GIPHY</a></p></div>
            : <List
              data={this.state.data}
              filter={this.state.filter}
              sortType={this.state.sortType}
              sortOrder={this.state.sortOrder} />

        }
      </div>
    )
  } S
}

