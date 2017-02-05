import { connect } from 'react-redux';
import { applyStyle } from '../actions';
import MapGrid from '../presenters/Map/MapGrid.jsx';
import { getSizes } from '../selectors';


const mapStateToProps = (state, ownProps) => {
  return {
    tiles: state.map,
    textureMap: state.textureMap,
    ...getSizes(state),
    ...state.settings,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    applyStyle: (key, style) => {
      dispatch(applyStyle(key, style));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapGrid);
