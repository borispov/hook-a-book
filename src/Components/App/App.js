import React, { Component } from 'react';
import Header from '../Header/Header'

class App extends Component {
  render() {
    const title = 'Welcome To Hook A Book'
    return (
      <div className="app">
        <Header title={title} />
      </div>
    )
  }
}

export default App
