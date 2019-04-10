import React from "react";
import MapLoadContainer from "../../containers/MapLoadContainer";
import MapGridContainer from "../../containers/MapGridContainer";

export const MapSelect = ({ mapLoaded }) => (
  <div>{mapLoaded ? <MapGridContainer /> : <MapLoadContainer />}</div>
);

export default MapSelect;
