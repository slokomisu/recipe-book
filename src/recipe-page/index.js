import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/index'

import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'
import Loading from '../shared/Loading'
import ErrorMessage from '../shared/ErrorMessage'
import RecipeEdit from './components/RecipeEdit'

class RecipePage extends Component {

  componentWillMount () {
    this.props.fetchRecipes()
  }

  render () {
    const {recipes, isFetching, fetchFailed} = this.props

    if (isFetching) {
      return <Loading/>
    }

    if (fetchFailed) {
      return <ErrorMessage header="Retreival Error" body="Could not retreive recipes. Please try again later"/>
    }

    // Location key needs to be added to route so that the component rerenders when the route paramaters
    // change.
    const locationKey = this.props.router.location.key
    return (
      <Container>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <RecipeList recipes={recipes}/>
            </Grid.Column>
            <Grid.Column>
              <Switch key={locationKey}>
                <Route path="/recipes/:id/edit" component={RecipeEdit}/>
                <Route path="/recipes/:id" component={RecipeDetail}/>
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

function mapStateToProps ({recipes: {recipes, isFetching, fetchFailed}, router}) {
  return {
    recipes,
    isFetching,
    fetchFailed,
    router
  }
}

export default connect(mapStateToProps, {fetchRecipes})(RecipePage)


