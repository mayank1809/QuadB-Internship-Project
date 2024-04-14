// import { createStore } from 'redux';
// import rootReducer from './reducers';
// //import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;



import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

// Save tasks to local storage whenever the Redux store is updated
store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks.tasks));
});

export default store;

