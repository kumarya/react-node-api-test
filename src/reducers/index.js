import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TodoReducer from './todos_reducer'

export default combineReducers({
  form: formReducer,
  todos:TodoReducer
  
});
