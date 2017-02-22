import React, { Component } from 'react';
import { compose, map, prop } from 'ramda';

import ImagePicker from './components/ImagePicker';
import Image from './components/Image';
import AvailableActions from './components/AvailableActions';
import AppliedActions from './components/AppliedActions';

import './App.scss';

class App extends Component {
  state = {
    imageURL: null,
    availableActions: [
      {id: 1, action: 'rotate', name: 'Rotate'},
      {id: 2, action: 'translateX', name: 'Translate'},
      {id: 3, action: 'opacity', name: 'Opacity'},
      {id: 4, action: 'bounce', name: 'Bounce'}
    ],
    appliedActions: []
  }

  setImageURL = URLString => {
    this.setState({
      imageURL: URLString
    });
  }

  pushAvailableAction = action => {
    this.setState({
      appliedActions: [
        action,
        ...this.state.appliedActions
      ],
      availableActions: this.state.availableActions.filter(availAction => availAction.id !== action.id)
    });
  }

  popAppliedAction = action => {
    this.setState({
      appliedActions : this.state.appliedActions.filter(appliedActions => action.id !== appliedActions.id),
      availableActions: [
        action,
        ...this.state.availableActions
      ]
    });
  }

  render () {
    return (
      <div className="container">
        <Image
          imageURL={this.state.imageURL}
          actions={map(prop('action'))(this.state.appliedActions).join(' ')}
        />
        <ImagePicker setImageURL={this.setImageURL} />
        <AvailableActions
          availableActions={this.state.availableActions}
          pushAction={this.pushAvailableAction}
        />
        <AppliedActions
          appliedActions={this.state.appliedActions}
          popAction={this.popAppliedAction}
        />
      </div>
    );
  }
}

export default App;
