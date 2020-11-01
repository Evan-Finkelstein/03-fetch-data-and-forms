import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './Header.js'
import Pokedex from './Pokedex.js'
import Detail from './Detail.js'
import Home from './Home.js'
import './App.css';
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className='header' >
                        <Header /></div>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <Home {...routerProps} />}
                        />
                        <Route
                            path="/pokedex"
                            exact
                            render={(routerProps) => <Pokedex {...routerProps} />}
                        />
                        <Route
                            path="/pokemon/:booger"
                            exact
                            render={(routerProps) => <Detail {...routerProps} />}
                        />



                    </Switch>

                </Router>
            </div>
        )
    }
}