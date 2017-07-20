import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'
import RecipeNewForm from './RecipeNewForm';
import { createRecipe, fetchRecipe } from '../../actions/index'
import { connect } from 'react-redux'

class RecipeNew extends Component {

  componentWillMount () {
    this.props.fetchRecipe(this.props.match.params.id)
  }

  handleSubmit = (values) => {
    this.props.createRecipe(values);
  }

  render () {
    return (
      <Container fluid>
        <Header >
          New Recipe
        </Header>
        <RecipeNewForm onSubmit={this.handleSubmit}/>
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

RecipeNew.propTypes = {}
RecipeNew.defaultProps = {}

export default connect(mapStateToProps, { createRecipe, fetchRecipe })(RecipeNew);
