import * as types from '../actions/constants'
import { mapKeys } from 'lodash'

const initialState = {
  isFetching: true,
  fetchFailed: false,
  recipes: {},
  selectedRecipeId: null,
  recipeUpdating: false,
  recipeUpdateError: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.START_FETCHING_RECIPES:
      return {...state, isFetching: true}
    case types.RECIPES_FETCH_SUCCESSFUL:
      return {...state, isFetching: false}
    case types.RECIPES_FETCH_FAILED:
      return {...state, isFetching: false, fetchFailed: true}
    case types.ADD_RECIPE:
      const currentRecipes = state.recipes
      return {...state, recipes: {...currentRecipes, [action.recipe.id]: action.recipe}}
    case types.SELECT_RECIPE:
      return {...state, selectedRecipe: action.recipe}
    case types.START_RECIPE_UPDATE:
      return {...state, recipeUpdating: true}
    case types.RECIPE_UPDATED:
      return {...state, recipeUpdating: false, [action.recipe.id]: action.recipe};
    case types.RECIPE_UPDATE_ERROR:
      return {...state, recipeUpdating: false, recipeUpdateError: true};
    default:
      return state
  }
}