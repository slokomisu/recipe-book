import React, { Component } from 'react'
import { Button, Container, Item } from 'semantic-ui-react'
import RecipeListItem from './RecipeListItem'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { map } from 'lodash'

class RecipeList extends Component {

  render () {
    const {recipes} = this.props

    return (
        <Item.Group divided link unstackable>
          {map(recipes, recipe => {
            return <RecipeListItem recipe={recipe} key={recipe.id}/>
          })}
        </Item.Group>
    )
  }
}

RecipeList.propTypes = {
  recipes: propTypes.object.isRequired
}

export default RecipeList