import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import { fetchUsers } from './reducers/usersSlice';
import { fetchPosts } from './reducers/postsSlice';

import App from './routes/App';

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
