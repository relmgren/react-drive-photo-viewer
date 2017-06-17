import React from 'react';
import { shallow } from 'enzyme';
import Error from  './Error';

describe('Error component', () => {
  const component = shallow(<Error />);

  it('renders as expected', () => {
    expect(component.contains('Error rendering page')).toBe(true);
  });

  it('is a h2', () => {
    expect(component.is('h2')).toBe(true);
  });

  it('is red', () => {
    expect(component.find('h2').prop('className')).toEqual('.h2--text-color-red');
  });
});
