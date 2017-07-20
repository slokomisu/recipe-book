import React, { Component } from 'react'
import { Grid, Container, Button } from 'semantic-ui-react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/index'

import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'
import Loading from '../shared/Loading'
import ErrorMessage from '../shared/ErrorMessage'
import RecipeEdit from './components/RecipeEdit'
import RecipeNew from './components/RecipeNew'

class RecipePage extends Component {
  constructor(props) {
    super(props);
  }

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
              <Container>
              <Button as={Link} to="/recipes/new" positive>
                Add Recipe
              </Button>
              <RecipeList recipes={recipes}/>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Switch key={locationKey}>
                <Route path="/recipes/new" component={RecipeNew} />
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


