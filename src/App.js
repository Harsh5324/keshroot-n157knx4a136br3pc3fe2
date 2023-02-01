import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Navigation from './navigation';
import store from './redux/store';

import './App.css';

const App = () => {
  return (<ReduxProvider store={store}>
    <Navigation />
  </ReduxProvider>);
}

export default App;

