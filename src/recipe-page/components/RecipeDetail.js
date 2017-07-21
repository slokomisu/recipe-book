import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/recipeActions'
import Loading from '../../shared/Loading'
import { Button, Card, Image } from 'semantic-ui-react'
import IngredientList from './IngredientList'
import { Link } from 'react-router-dom'

class RecipeDetail extends Component {

  componentWillMount () {
    const {id} = this.props.match.params
    this.props.fetchRecipe(id)
  }

  handleDelete = () => {
    this.props.deleteRecipe(this.props.selectedRecipe);
  }

  render () {
    const {selectedRecipe} = this.props

    if (!selectedRecipe) {
      return <Loading/>
    }

    return (
      <Card fluid>
        <Image src={selectedRecipe.imagePath}/>
        <Card.Content>
          <Card.Header>
            {selectedRecipe.name}
          </Card.Header>
          <Card.Description>
            {selectedRecipe.description}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Meta>Ingredients</Card.Meta>
          <IngredientList ingredients={selectedRecipe.ingredients}/>
        </Card.Content>
        <Card.Content extra>
          <div className='ui three buttons'>
            <Button basic color='blue'>To Shopping List</Button>
            <Button basic color='green' as={Link} to={this.editUrl()}>Edit</Button>
            <Button basic color='red' onClick={this.handleDelete}>Delete</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }

  // Hack to make the edit url work every time
  editUrl = () => {
    if (this.props.match.url.slice(-1) === '/') {
      return this.props.match.url.slice(0, this.props.match.url.length - 1) + '/edit'
    } else {
      return this.props.match.url + '/edit'
    }
  }
}

function mapStateToProps ({recipes: {selectedRecipe}}) {
  return {
    selectedRecipe
  }
}

export default connect(mapStateToProps, {fetchRecipe: actions.fetchRecipes, deleteRecipe: actions.deleteRecipe})(RecipeDetail)

