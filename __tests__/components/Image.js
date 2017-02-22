import React from 'react';
import Image from '../../src/components/Image';

import renderer from 'react-test-renderer';

describe('<Image /> component', () => {
  it('should render <Image /> correctly', () => {
    const tree = renderer.create(<Image />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

