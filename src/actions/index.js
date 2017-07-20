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
        const recipes = Object.values(snapshot.val());
        dispatch(receiveRecipes(recipes));
      })
  }
}

export const receiveRecipes = (recipes) => {
  return function (dispatch) {
    if (recipes.constructor === Array) {
      recipes.forEach(recipe => dispatch(addRecipe(recipe)))
    } else {
      dispatch(addRecipe(recipes));
    }
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


function recipeDeleteStart () {
  return {
    type: types.RECIPE_DELETE_START
  }
}

function recipeDeleteFinish (recipe) {
  return {
    type: types.RECIPE_DELETED,
    recipe
  }
}

function recipeDeleteError () {
  return {
    type: types.RECIPE_DELETE_ERROR
  }
}

export const createRecipe = (newRecipe) => {
  return function (dispatch) {
    const newRecipeRef = firebase.database().ref('/recipes').push()
    newRecipe.id = newRecipeRef.key
    newRecipeRef.set(newRecipe)
      .then(() => {
        dispatch(recipeCreated(newRecipe));
        dispatch(push('./'))
      })
      .catch(err => {
        dispatch(recipeCreateError(err));
      });
  }
}

export const recipeCreateStart = () => {
  return {
    type: types.RECIPE_CREATE_START
  }
}

export const recipeCreated = newRecipe => {
  return {
    type: types.RECIPE_CREATE_SUCCESS,
    newRecipe
  }
}

export const recipeCreateError = err => {
  return {
    type: types.RECIPE_CREATE_ERROR,
    err
  }
}

export const deleteRecipe = (recipe) => {
  return function (dispatch) {
    dispatch(recipeDeleteStart())
    const recipeRef = firebase.database().ref(`/recipes/${recipe.id}`);
    recipeRef.remove()
      .then(() => {
        dispatch(recipeDeleteFinish(recipe));
        dispatch(push('./'))
      })
      .catch(() => {
        dispatch(recipeDeleteError())
      })
  }
}







