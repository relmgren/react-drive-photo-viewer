import React, { Component } from 'react';
import './home.css';
import GoogleDriveIFrame from '../../components/googleDriveIFrame/GoogleDriveIFrame';

let folderUrl = 'https://drive.google.com/embeddedfolderview?id=0B-Qx1mZRMyliSVctMC1oUkExaEE#grid';

class Home extends Component {
  render = () => {
    return (
      <div>
        <header>
          <h1 className="h1--text-big">RageCage FoodBlog</h1>
        </header>

        <GoogleDriveIFrame folderUrl={folderUrl}/>
      </div>
    )
  }
}

export default Home;
