import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Button } from 'semantic-ui-react'
import { reduxForm } from 'redux-form'

class RecipeEdit extends Component {
  render () {
    return (
      <Container fluid>
        <Button as={Link} to="../" color="red">Cancel</Button>
      </Container>

    )
  }
}

export default reduxForm({
  form: 'recipeEdit'
})(RecipeEdit)