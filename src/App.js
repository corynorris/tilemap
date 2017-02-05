import React, { Component } from 'react';
import SettingsContainer from './containers/SettingsContainer'
import TextureSelectContainer from './containers/TextureSelectContainer'
import MapSelectContainer from './containers/MapSelectContainer'
import TextureMapContainer from './containers/TextureMapContainer'
import './simple-grid.min.css';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h3> Tile Mapper </h3>
            <div className="flex-display">
              <MapSelectContainer />
              <TextureSelectContainer />
            </div>
            <TextureMapContainer />
          </div>
          <div className="col-4">
            <form>
              <h5> Settings </h5>
              <hr />
              <SettingsContainer />
            </form>
          </div>
        </div>
      </div>
      // <div className="wrapper">
      //   <div className="left-container">
      //     <MapSelectContainer />
      //     <TextureSelectContainer />
      //     <TextureMapContainer />
      //   </div>
      //   <div className="right-container">
      //     <b> Settings </b>
      //     <hr />
      //     <SettingsContainer />
      //   </div>
      // </div>
    );
  }
}

export default App;
