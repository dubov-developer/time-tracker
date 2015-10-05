import React from 'react';
import App from './App.jsx';

export default class Root extends React.Component {
  render() {
    return <App test={this.props.test}/>
  }
}

React.render(<Root test={5000} />, document.getElementById('app'));
