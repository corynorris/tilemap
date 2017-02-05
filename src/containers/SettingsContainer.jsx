import {connect} from 'react-redux';
import { setTilesWide, setTilesHigh, setScale } from '../actions';
import Settings from '../presenters/Settings.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    scale: state.settings.scale,
    tilesHigh: state.settings.tilesHigh,
    tilesWide: state.settings.tilesWide,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: (event, value) => {
      switch(event) {
        case 'scale':
          return dispatch(setScale(value));
        case 'tilesHigh':
          return dispatch(setTilesHigh(value));
        case 'tilesWide':
          return dispatch(setTilesWide(value));
        default:
          return 
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings);
