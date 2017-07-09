import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

class NavigationBar extends Component {
  state = {}

  render () {
    return (
      <Menu>
        <Menu.Item
          header
          name="homeLink"
          as={Link}
          to="/"
          content="Recipe Book"
        />
        <Menu.Item
          name="recipesLink"
          as={NavLink}
          to="/recipes"
          content="Recipes"
        />
        <Menu.Item
          name="shoppingLink"
          as={NavLink}
          to="/shopping-list"
          content="Shopping List"
        />
      </Menu>
    )
  }
}

export default NavigationBar