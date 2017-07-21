import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import RecipeListItem from './RecipeListItem'
import propTypes from 'prop-types'
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
  recipes: propTypes.array.isRequired
}

export default RecipeList