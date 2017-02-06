import { connect } from 'react-redux';
import { loadTexture } from '../actions';
import { loadImageFile } from '../core/image.js';
import FileLoader from '../presenters/FileLoader.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    text: 'Load Texture',
    texture: state.texture,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dropHandler: (files) => {
      loadImageFile(files[0]).then((image) => {
        dispatch(loadTexture(image))
      }).catch((reason) => {
        alert(reason);
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileLoader);
