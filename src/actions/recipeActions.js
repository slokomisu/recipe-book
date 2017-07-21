import { push } from 'react-router-redux'
import reduxCrud from 'redux-crud'
import firebase from '../firebase'
import { SELECT_RECIPE } from './constants'


const baseActionCreators = reduxCrud.actionCreatorsFor('recipes')

let actionCreators = {
  selectRecipe(recipe) {
    return {
      type: SELECT_RECIPE,
      recipe
    }
  },

  fetchRecipe (recipeId) {
    return function (dispatch) {
      dispatch(baseActionCreators.fetchStart());
      firebase.database()
        .ref(`/recipes/${recipeId}`)
        .once('value', (snapshot) => {
          const recipe = snapshot.val()
          dispatch(this.selectRecipe(recipe))
        })
    }
  },



  fetchRecipes() {
    return function (dispatch) {
      dispatch(baseActionCreators.fetchStart())
      firebase.database()
        .ref('/recipes')
        .on('value', snapshot => {
          const recipes = Object.values(snapshot.val()) || [];
          dispatch(baseActionCreators.fetchSuccess(recipes))
        })
    }
  },

  createRecipe(newRecipe) {
    return function (dispatch) {
      dispatch(baseActionCreators.createStart());
      const newRecipeRef = firebase.database().ref('/recipes').push();
      newRecipe.id = newRecipeRef.key;
      newRecipeRef.set(newRecipeRef)
        .then(() => {
          dispatch(baseActionCreators.createSuccess(newRecipe));
          dispatch(push('./'))
        })
        .catch(error => {
          dispatch(baseActionCreators.createError(error));
        })
    }
  },

  updateRecipe(recipe) {
    return function (dispatch) {
      dispatch(baseActionCreators.updateStart());
      const recipeRef = firebase.database().ref(`/recipes/${recipe.id}`);
      recipeRef.update(recipe)
        .then(() => {
          dispatch(baseActionCreators.updateSuccess(recipe))
          dispatch(push('./'))
        })
        .catch(error => {
          dispatch(baseActionCreators.updateError(error))
        })
    }
  },

  deleteRecipe(recipe) {
    return function (dispatch) {
      dispatch(baseActionCreators.deleteStart());
      const recipeRef = firebase.database().ref(`/recipes/${recipe.id}`)
      recipeRef.remove()
        .then(() => {
          dispatch(baseActionCreators.deleteSuccess(recipe));
        })
        .catch(error => {
          dispatch(baseActionCreators.deleteError(error));
        })
    }
  }
}

actionCreators = Object.assign(baseActionCreators, actionCreators);

export default actionCreators;

