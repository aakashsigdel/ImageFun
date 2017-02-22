import React from 'react';

import './Actions.scss';

const AppliedActions = props =>
  <div className="applied-actions-container">
    {props.appliedActions.map(action =>
      <div key={action.id}
        className="action"
        onClick={() => props.popAction(action)}
      >
        {action.name}
      </div>
    )}
  </div>;

export default AppliedActions;
