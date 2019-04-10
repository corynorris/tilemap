import { connect } from "react-redux";
import TextureMap from "../presenters/TextureMap";

const mapStateToProps = (state, ownProps) => {
  return {
    textureMap: state.textureMap
  };
};

export default connect(mapStateToProps)(TextureMap);
