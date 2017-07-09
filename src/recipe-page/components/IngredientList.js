import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

const IngredientList = ({ingredients}) => {
  const items = ingredients.map(ingredient => {
    return <List.Item key={ingredient.name}>{ingredient.name} ({ingredient.amount})</List.Item>
  })

  return (
    <List>
      {items}
    </List>
  )
}

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default IngredientList