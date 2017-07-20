import React from 'react'
import { Item } from 'semantic-ui-react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function RecipeListItem ({recipe: {imagePath, name, description, id}}) {
  return (
    <Item as={Link} to={`/recipes/${id}`}>
      <Item.Image size="tiny" src={imagePath}/>
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          {description}
        </Item.Description>
      </Item.Content>
    </Item>
  )
}

RecipeListItem.propTypes = {
  recipe: propTypes.shape({
    name: propTypes.string.isRequired,
    imagePath: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    ingredients: propTypes.array.isRequired,
    id: propTypes.string.isRequired,
  }).isRequired
}

export default RecipeListItem