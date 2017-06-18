import React from 'react';
import { shallow } from 'enzyme';
import Home from  './Home';

describe('Home component', () => {
  const component = shallow(<Home />);

  it('renders as expected', () => {
    expect(component.contains('Hello World')).toBe(true);
  });

  it('is a h1', () => {
    expect(component.is('h1')).toBe(true);
  });
});
