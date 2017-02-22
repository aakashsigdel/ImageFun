import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AvailableActions from '../../src/components/AvailableActions';

import renderer from 'react-test-renderer';

describe('<AvailableActions /> component', () => {
  it('should render <AvailableActions /> correctly', () => {
    const tree = renderer.create(<AvailableActions availableActions={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call pushActions onClick', () => {
    const pushAction = sinon.spy();
    const wrapper = shallow(
      <AvailableActions
        availableActions={[{id: 1, action: 'roatate', name: 'Rotate'}]}
        pushAction={pushAction}
      />);
    wrapper.find('.action').simulate('click');

    expect(pushAction.calledOnce).toEqual(true);
  })
});



