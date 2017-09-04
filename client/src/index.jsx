import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import App from './components/App.jsx';

import './styles.less';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('app'));