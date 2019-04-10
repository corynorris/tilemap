import { connect } from "react-redux";
import { loadMap } from "../actions";
import { loadMapFile } from "../core/map.js";
import FileLoader from "../presenters/FileLoader.jsx";

const mapStateToProps = (state, ownProps) => {
  return {
    text: "Load Map",
    texture: state.texture,
    overlay: state.textureOverlay
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dropHandler: files => {
      loadMapFile(files[0])
        .then(map => {
          dispatch(loadMap(map.data));
        })
        .catch(reason => {
          alert(reason);
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileLoader);
