import * as types from '../actions/constants'
import { omit } from 'lodash'

var initialState = {
  isFetching: true,
  fetchFailed: false,
  recipes: {},
  selectedRecipeId: null,
  recipeUpdating: false,
  recipeDeleting: false,
  recipeDeleteError: false,
  recipeUpdateError: false,
  recipeCreating: false,
  recipeCreateError: null,
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
      var currentRecipes = state.recipes
      return {...state, recipes: {...currentRecipes, [action.recipe.id]: action.recipe}}
    case types.SELECT_RECIPE:
      return {...state, selectedRecipe: action.recipe}
    case types.START_RECIPE_UPDATE:
      return {...state, recipeUpdating: true}
    case types.RECIPE_UPDATED:
      return {...state, recipeUpdating: false, [action.recipe.id]: action.recipe};
    case types.RECIPE_UPDATE_ERROR:
      return {...state, recipeUpdating: false, recipeUpdateError: true};
    case types.RECIPE_DELETE_START:
      return {...state, recipeDeleting: true}
    case types.RECIPE_DELETED:
      var newState = omit(state, [`recipes.${action.recipe.id}`]);
      return {...newState, recipeDeleting: false};
    case types.RECIPE_DELETE_ERROR:
      return {...state, recipeDeleting: false, recipeDeleteError: true}
    case types.RECIPE_CREATE_START:
      return {...state, recipeCreating: true}
    case types.RECIPE_CREATE_SUCCESS:
      var currentRecipes = state.recipes;
      return {...state, recipeCreating: false, recipes: {...currentRecipes, [action.newRecipe.id]: action.newRecipe}}
    case types.RECIPE_CREATE_ERROR:
      return {...state, recipeCreating: false, recipeCreateError: true};
    default:
      return state
  }
}