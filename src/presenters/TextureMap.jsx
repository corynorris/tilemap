import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export class TextureMap extends Component {
  render() {
    return (
      <div
        style={{
          overflowWrap: "break-word"
        }}
      >
        <SyntaxHighlighter language="json" style={docco}>
          {JSON.stringify(this.props.textureMap, null, 2)}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default TextureMap;
