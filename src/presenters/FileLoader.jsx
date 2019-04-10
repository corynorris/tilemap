import React from "react";
import Dropzone from "react-dropzone";

export const FileLoader = ({ dropHandler, text }) => (
  <Dropzone onDrop={dropHandler.bind(this)}>
    {({ getRootProps, getInputProps }) => (
      <section>
        <div style={{ border: "1px dashed black" }} {...getRootProps()}>
          <input {...getInputProps()} />
          <p style={{ margin: 0, padding: "10px" }}>{text}</p>
        </div>
      </section>
    )}
  </Dropzone>
);

export default FileLoader;
