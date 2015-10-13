import React from 'react';
import Header from 'components/Header';
require('styles/fonts.scss');

export default class App extends React.Component {
  
  render() {
    return <h1>{this.props.test}</h1>
  }
}
