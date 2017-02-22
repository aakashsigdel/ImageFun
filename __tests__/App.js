import React from 'react';
import App from '../src/App';

import renderer from 'react-test-renderer';

describe('<App /> component', () => {
  it('should render <App /> correctly', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

