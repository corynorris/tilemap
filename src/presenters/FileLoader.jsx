import React from 'react';
import Dropzone from 'react-dropzone';

export const FileLoader = ({
  dropHandler,
  text
}) => (
    <Dropzone
      onDrop={dropHandler.bind(this)}
      style={{
        border: '1px dashed black',
      }}
      >
     <p style={{
       lineHeight: '40px',
        textAlign: 'center',
        padding: '10px',
        margin: '0',
      }}>{text}</p>
    </Dropzone>
  )

export default FileLoader
