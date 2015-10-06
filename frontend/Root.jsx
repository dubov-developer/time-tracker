import React from 'react';
import { createStore } from 'redux';
import App from './App.jsx';
import * as actions from './actions/';
import rootReducer from 'reducers/';
import { Map, List } from 'immutable';

const store = createStore(rootReducer);

export default class Root extends React.Component {
  render() {
    return <App test={this.props.test}/>
  }
}

React.render(<Root test={7000} />, document.getElementById('app'));
