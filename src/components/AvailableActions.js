import React from 'react';

import './Actions.scss';

const AvailableActions = props =>
  <div className="available-actions-container">
    <div className="menu-title">Available Actions</div>
    <ul>
      {props.availableActions.map(action =>
        <li key={action.id}
          className="action"
          onClick={() => {props.pushAction(action)}}
        >
          <a>{action.name}</a>
        </li>
      )}
    </ul>
  </div>;

export default AvailableActions;
