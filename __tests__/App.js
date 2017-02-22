import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../src/App';

import renderer from 'react-test-renderer';

describe('<App /> component', () => {
  const availableActions = [
    {id: 1, action: 'rotate', name: 'Rotate'},
    {id: 2, action: 'translateX', name: 'Translate'},
    {id: 3, action: 'opacity', name: 'Opacity'},
    {id: 4, action: 'bounce', name: 'Bounce'}
  ];
  const appliedActions = [];

  it('should render <App /> correctly', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should check initial state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().availableActions).toEqual(availableActions);
    expect(wrapper.state().appliedActions).toEqual([]);
  })

  it('should setImageURL', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setImageURL('helloURL');

    expect(wrapper.state().imageURL).toEqual('helloURL');
  })

  it('should pushAvailableAction and popAppliedAction', () => {
    const wrapper = shallow(<App />);

    const action = {id: 1, action: 'rotate', name: 'Rotate'};
    const expectedAvailableActions = [
      {id: 2, action: 'translateX', name: 'Translate'},
      {id: 3, action: 'opacity', name: 'Opacity'},
      {id: 4, action: 'bounce', name: 'Bounce'}
    ];
    const expectedAppliedActions = [{id: 1, action: 'rotate', name: 'Rotate'}];

    wrapper.instance().pushAvailableAction(action)

    expect(wrapper.state().availableActions).toEqual(expectedAvailableActions);
    expect(wrapper.state().appliedActions).toEqual(expectedAppliedActions);

    wrapper.instance().popAppliedAction(action)
    expect(wrapper.state().availableActions).toEqual(availableActions);
    expect(wrapper.state().appliedActions).toEqual([]);
  })
});

