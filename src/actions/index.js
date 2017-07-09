import * as types from './constants'
import firebase from '../firebase'
import { push } from 'react-router-redux'

export const addRecipe = (recipe) => {
  return {
    type: types.ADD_RECIPE,
    recipe
  }
}

export function newRecipe (recipe) {
  return function (dispatch) {
    const newRecipeRef = firebase.database().ref('/recipes').push()
    recipe.id = newRecipeRef.key
    newRecipeRef.set(recipe)
    dispatch(addRecipe(recipe))
  }
}

export const startFetchingRecipes = () => {
  return {
    type: types.START_FETCHING_RECIPES
  }
}

export const receivedRecipes = () => {
  return {
    type: types.RECIPES_FETCH_SUCCESSFUL
  }
}

export const fetchRecipesFailed = () => {
  return {
    type: types.RECIPES_FETCH_FAILED
  }
}

export const fetchRecipes = () => {
  return function (dispatch) {
    dispatch(startFetchingRecipes())
    firebase.database().ref('/recipes')
      .on('value', (snapshot) => {
        const recipes = snapshot.val() || []
        dispatch(receiveRecipes(recipes))
      })
  }
}

export const receiveRecipes = (recipes) => {
  return function (dispatch) {
    recipes.forEach(recipe => dispatch(addRecipe(recipe)))
    dispatch(receivedRecipes())
  }
}

export const selectRecipe = (recipe) => {
  return {
    type: types.SELECT_RECIPE,
    recipe
  }
}

export const fetchRecipe = (recipeId) => {
  return function (dispatch) {
    firebase.database().ref(`/recipes/${recipeId}`)
      .once('value', (snapshot) => {
        const recipe = snapshot.val()
        dispatch(selectRecipe(recipe))
      })
  }
}

function recipeUpdateStart () {
  return {
    type: types.START_RECIPE_UPDATE
  }
}

function recipeUpdateFinish (recipe) {
  return {
    type: types.RECIPE_UPDATED,
    recipe
  }
}

function recipeUpdateError () {
  return {
    type: types.RECIPE_UPDATE_ERROR
  }
}

export const updateRecipe = (recipe) => {
  return function (dispatch) {
    dispatch(recipeUpdateStart())
    const recipeRef = firebase.database().ref(`/recipes/${recipe.id}`)
    recipeRef.update(recipe)
      .then(() => {
        dispatch(recipeUpdateFinish(recipe))
        dispatch(push('./'))
      })
      .catch(() => {
        dispatch(recipeUpdateError())
      })
  }
}







