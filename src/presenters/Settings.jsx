import React from "react";
import NumericInput from "react-numeric-input";

export const Settings = ({ handleChange, tilesWide, tilesHigh, scale }) => (
  <div>
    <div>
      <label htmlFor="tilesWide">Tiles Wide </label>
      <br />
      <NumericInput
        id="tilesWide"
        value={tilesWide}
        min={1}
        max={32}
        onChange={val => {
          handleChange("tilesWide", val);
        }}
      />
    </div>
    <div>
      <label htmlFor="tilesHigh">Tiles High </label>
      <br />
      <NumericInput
        id="tilesHigh"
        value={tilesHigh}
        min={1}
        max={32}
        onChange={val => {
          handleChange("tilesHigh", val);
        }}
      />
    </div>
    <div>
      <label htmlFor="scale">Scale </label>
      <br />
      <NumericInput
        id="scale"
        value={scale}
        step={0.1}
        precision={1}
        min={1}
        max={5}
        onChange={val => {
          handleChange("scale", val);
        }}
      />
    </div>
  </div>
);

export default Settings;
