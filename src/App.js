import React, { Component } from 'react'
import NavigationBar from './shared/NavigationBar'
import { Switch, Route } from 'react-router-dom'
import HomePage from './home-page'
import RecipePage from './recipe-page'
import ShoppingListPage from './shopping-list-page'

class App extends Component {
  state = {}

  render () {

    return (
      <div>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/recipes" component={RecipePage}/>
          <Route path="/shopping-list" component={ShoppingListPage}/>
        </Switch>
      </div>
    )
  }
}

export default App
