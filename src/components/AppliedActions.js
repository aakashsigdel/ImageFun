import React from 'react';

import './Actions.scss';

const AppliedActions = props =>
  <div className="applied-actions-container">
    <div className="menu-title">Applied Actions</div>
    <ul>
      {props.appliedActions.map(action =>
        <li key={action.id}
          className="action"
          onClick={() => props.popAction(action)}
        >
          <a>{action.name}</a>
        </li>
      )}
    </ul>
  </div>;

export default AppliedActions;
