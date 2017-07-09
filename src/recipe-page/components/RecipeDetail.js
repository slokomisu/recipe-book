import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchRecipe } from '../../actions/index'
import Loading from '../../shared/Loading'
import { Button, Card, Image } from 'semantic-ui-react'
import IngredientList from './IngredientList'
import { Link } from 'react-router-dom'

class RecipeDetail extends Component {
  state = {
    editing: false
  }

  componentWillMount () {
    const {id} = this.props.match.params
    this.props.fetchRecipe(id)
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
            <Button basic color='green' as={Link} to={`${this.props.match.params.id}/edit`}>Edit</Button>
            <Button basic color='red'>Delete</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps ({recipes: {selectedRecipe}}) {
  return {
    selectedRecipe
  }
}

export default connect(mapStateToProps, {fetchRecipe})(RecipeDetail)

