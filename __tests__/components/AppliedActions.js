import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AppliedActions from '../../src/components/AppliedActions';

import renderer from 'react-test-renderer';

describe('<AppliedActions /> component', () => {
  it('should render <AppliedActions /> correctly', () => {
    const tree = renderer.create(<AppliedActions appliedActions={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call popActions onClick', () => {
    const popAction = sinon.spy();
    const wrapper = shallow(
      <AppliedActions
        appliedActions={[{id: 1, action: 'roatate', name: 'Rotate'}]}
        popAction={popAction}
      />);
    wrapper.find('.action').simulate('click');

    expect(popAction.calledOnce).toEqual(true);
  })
});


