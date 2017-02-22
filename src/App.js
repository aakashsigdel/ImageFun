import React, { Component } from 'react';

import ImagePicker from './components/ImagePicker';

import './App.scss';

class App extends Component {
  state = {
    imageURL: null
  }

  setImageURL = (URLString) => {
    this.setState({
      imageURL: URLString,
      availableActions: [],
      appliedActions: []
    });
  }

  render () {
    return (
      <div className="container">
        <ImagePicker setImageURL={this.setImageURL} />
      </div>
    );
  }
}

export default App;
