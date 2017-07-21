import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import reduxCrud from 'redux-crud';

const rootReducer = combineReducers({
  recipes: reduxCrud.List.reducersFor('recipes'),
  router,
  form: formReducer
})

export default rootReducer