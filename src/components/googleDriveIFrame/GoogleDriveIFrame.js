import React, { Component } from 'react';
import './GoogleDriveIFrame.css';

class GoogleDriveIFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      images: [],
    };
  }

  render = () => {
    return (
      <div className="iframe--div-scaled-up">
        { this.state.loading ? 'Loading images' : '' }
        { this.state.images }
      </div>
    )
  }

  componentDidMount = () => {
    let loadHandler = () => {
      console.log('hi')
      this.setState({
        loading: false
      });
    };
    let ifrm = <GFrame folderUrl={this.props.folderUrl} loadHandler={loadHandler} />;
    this.setState({
      images: ifrm
    });
  }

  componentWillUnmount = () => {
    this.setState({
      images: []
    })
  }
}

export default GoogleDriveIFrame;

export const GFrame = ({folderUrl, loadHandler}) => {
  return (
    <iframe
     className="google-drive--iframe-size"
     src={folderUrl}
     title="google-drive-images"
     onLoad={loadHandler}
   />
  )
}
