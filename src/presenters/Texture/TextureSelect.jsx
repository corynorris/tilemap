import React from 'react';
import MapLoadContainer from '../../containers/TextureLoadContainer'
import MapGridContainer from '../../containers/TextureGridContainer'

export const TextureSelect = ({
  textureLoaded,
}) => (
  <div>
    {
      textureLoaded ?
        <MapGridContainer />:
        <MapLoadContainer /> 
    }
  </div>
);

export default TextureSelect;
