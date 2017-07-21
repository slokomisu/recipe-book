import * as actionTypes from '../actions/constants';

const initialState = {
  shoppingList: [],
  fetchingList: false,
  fetchListError: null,
  addingIngredient: false,
  addIngredientError: null,
  removingIngredient: false,
  removeIngredientError: null,
};

export default function shoppingListReducer(state = initialState, action) {

}