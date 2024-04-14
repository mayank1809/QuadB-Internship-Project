import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

// Save tasks to local storage whenever the Redux store is updated
store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks.tasks));
});

export default store;

