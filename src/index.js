import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import { fetchUsers } from './reducers/usersSlice';

import App from './routes/App';

store.dispatch(fetchUsers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
