import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'


class Index extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<App />
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
