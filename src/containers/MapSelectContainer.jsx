import { connect } from "react-redux";
import MapSelect from "../presenters/Map/MapSelect";

const mapStateToProps = (state, ownProps) => {
  return {
    mapLoaded: state.application.mapLoaded
  };
};

export default connect(mapStateToProps)(MapSelect);
