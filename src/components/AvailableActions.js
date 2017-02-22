import React from 'react';

import './Actions.scss';

const AvailableActions = props =>
  <div className="available-actions-container">
    {props.availableActions.map(item =>
      <div key={item.id}
        className="action"
        onClick={() => {props.pushAction(item)}}
      >
        {item.name}
      </div>
    )}
  </div>;

export default AvailableActions;
