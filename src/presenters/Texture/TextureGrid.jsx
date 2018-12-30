import React, { Component } from "react";
import Grid from "../Grid";
import { range } from "../../core/utils.js";
import { cropImage } from "../../core/image.js";

class TextureGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [[]]
    };
  }

  generateImages({ texture, tilesWide, tilesHigh }) {
    let { dataUri, width, height } = texture;
    const imageWidth = width / tilesWide;
    const imageHeight = height / tilesHigh;

    const promises = range(tilesWide).map((row, x) =>
      Promise.all(
        range(tilesHigh).map((col, y) => {
          const cx = x * imageWidth;
          const cy = y * imageHeight;
          return cropImage(dataUri, cx, cy, imageWidth, imageHeight).then(
            croppedImage => {
              return croppedImage;
            }
          );
        })
      )
    );

    Promise.all(promises).then(images => {
      this.setState({
        images
      });
    });
  }

  handleDrag(image, key, ev) {
    ev.dataTransfer.setData(
      "style",
      JSON.stringify({
        image,
        key
      })
    );
  }

  componentWillReceiveProps(nextProps) {
    this.generateImages(nextProps);
  }

  componentWillMount() {
    this.generateImages(this.props);
  }

  render() {
    const { tilesHigh, tileWidth, tileHeight } = this.props;

    const components = this.state.images.map((imageRow, x) =>
      imageRow.map((image, y) => {
        const key = y * tilesHigh + x;
        return (
          <td key={key}>
            <img
              onDragStart={this.handleDrag.bind(this, image, key)}
              src={image}
              alt={`${key}-${x}-${y}`}
              style={{
                width: tileWidth,
                height: tileHeight
              }}
            />
          </td>
        );
      })
    );
    return <Grid components={components} />;
  }
}

export default TextureGrid;
