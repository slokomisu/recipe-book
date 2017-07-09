import { combineReducers } from 'redux'
import recipeReducer from './recipeReducer'
import { routerReducer as router } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  router,
  form: formReducer
})

export default rootReducer