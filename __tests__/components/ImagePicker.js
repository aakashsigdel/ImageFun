import React from 'react';
import ImagePicker from '../../src/components/ImagePicker';

import renderer from 'react-test-renderer';

describe('<ImagePicker /> component', () => {
  it('should render <ImagePicker /> correctly', () => {
    const tree = renderer.create(<ImagePicker />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
