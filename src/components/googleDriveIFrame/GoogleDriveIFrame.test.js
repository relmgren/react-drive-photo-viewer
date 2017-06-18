import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import GoogleDriveIFrame, {GFrame} from './GoogleDriveIFrame';

let mockData = { folderUrl: 'asdf'};

describe('Google Drive Iframe', () => {
  const component = mount(<GoogleDriveIFrame {...mockData} />);

  it('does not explode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GoogleDriveIFrame />, div);
  });

  it('creates an iframe on component mount', () => {
    expect(component.contains(<GFrame {...mockData} />)).toEqual(true);
  });
});
