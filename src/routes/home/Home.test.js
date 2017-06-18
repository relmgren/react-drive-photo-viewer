import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from  './Home';
import GoogleDriveIFrame from '../../components/googleDriveIFrame/GoogleDriveIFrame';


describe('Home component', () => {
  const component = shallow(<Home />);
  const googleIframe = shallow(<GoogleDriveIFrame />).map(arrItem => arrItem);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });

  it('renders header', () => {
    expect(component.contains('RageCage FoodBlog')).toBe(true);
  });

  it('contains a google iframe', () => {
    expect(component.contains(googleIframe));
  });
});
