import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'
import RecipeEditForm from './RecipeEditForm'
import { updateRecipe } from '../../actions/index'
import { connect } from 'react-redux'

class RecipeEdit extends Component {

  handleSubmit = (values) => {
    this.props.updateRecipe(values);
  }

  render () {
    return (
      <Container fluid>
        <Header >
          Recipe Edit
        </Header>
        <RecipeEditForm onSubmit={this.handleSubmit} id={this.props.match.params.id}/>
      </Container>
    )
  }
}

RecipeEdit.propTypes = {}
RecipeEdit.defaultProps = {}

export default connect(null, { updateRecipe })(RecipeEdit);
