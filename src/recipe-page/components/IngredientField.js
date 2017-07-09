import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react';


const IngredientField = ({ingredient: {name, amount}}) => {
  return (
    <Form.Group inline>
      <Form.Input label="Name" type="text" value={name}/>
      <Form.Input label="Amount" type="number" value={amount}/>
    </Form.Group>
  )
}

IngredientField.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired
}
IngredientField.defaultProps = {
  ingredient: {
    name: '',
    amount: 0
  }
}

export default IngredientField
