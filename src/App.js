import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
    <div>
      <Navigation></Navigation>
      <Container></Container>
    </div>
    );
  }
}

export default App;
