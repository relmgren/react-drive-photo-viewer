import React, { Component } from 'react';
import './GoogleDriveIFrame.css';

class GoogleDriveIFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      images: [],
    };
  }

  render = () => {
    return (
      <div className="iframe--div-scaled-up">
        { this.state.loading ? 'Loading images' :
        this.state.images }
      </div>
    )
  }

  componentDidMount = () => {
    let ifrm = <GFrame folderUrl={this.props.folderUrl} />
    this.setState({
      images: ifrm
    });
  }
}

export default GoogleDriveIFrame;

export const GFrame = ({folderUrl}) => {
  return (
    <iframe
     className="google-drive--iframe-size"
     src={folderUrl}
     title="google-drive-images"
   />
  )
}
