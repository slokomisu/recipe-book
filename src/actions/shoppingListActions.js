import * as actionTypes from './constants'
import firebase from '../firebase'

export function startFetchingList () {
  return {
    type: actionTypes.SLIST_FETCH_START,
  }
}

export function fetchListSuccess (shoppingList) {
  return {
    type: actionTypes.SLIST_FETCH_SUCCESSFUL,
    shoppingList,
  }
}

export function fetchListFailed (error) {
  return {
    type: actionTypes.SLIST_FETCH_FAILED,
    error,
  }
}

export function addIngredient (ingredient) {
  return {
    type: actionTypes.SLIST_ADD_INGREDIENT,
    ingredient,
  }
}
export function updateIngredient (id, updatedIngredient) {
  return function (dispatch) {
    dispatch(startUpdateIngredient())
    const ingredientRef = firebase.database().ref(`/ingredients/${id}`)
    ingredientRef.update(updatedIngredient).then(() => {
      dispatch(ingredientUpdateSuccessful(updatedIngredient))
    }).catch((error) => dispatch(ingredientUpdateFailed(error)))
  }
}