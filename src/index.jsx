import React from 'react';
import {Provider, configureStore} from './redux_toolkit_glue'
import ReactDOM from 'react-dom/client';
import MainFunc from './common';

import {example1_slice} from './example1_slice';

export const store = configureStore({
  reducer: {
    example1_slice: example1_slice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainFunc />
    </Provider>
  </React.StrictMode>
);
