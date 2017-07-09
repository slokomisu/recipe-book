import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'
import RecipeEditForm from './RecipeEditForm'
import { updateRecipe, fetchRecipe } from '../../actions/index'
import { connect } from 'react-redux'

class RecipeEdit extends Component {

  componentWillMount () {
    this.props.fetchRecipe(this.props.match.params.id)
  }

  handleSubmit = (values) => {
    this.props.updateRecipe(values);
  }

  render () {
    return (
      <Container fluid>
        <Header >
          Recipe Edit
        </Header>
        <RecipeEditForm onSubmit={this.handleSubmit} selectedRecipe={this.props.selectedRecipe}/>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  const { selectedRecipe } = state.recipes;
  return {
    selectedRecipe
  };
}

RecipeEdit.propTypes = {}
RecipeEdit.defaultProps = {}

export default connect(mapStateToProps, { updateRecipe, fetchRecipe })(RecipeEdit);
