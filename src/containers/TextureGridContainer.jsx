import { connect } from 'react-redux';
import TextureGrid from '../presenters/Texture/TextureGrid.jsx';
import { getSizes } from '../selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    texture: state.texture,
    ...getSizes(state),
    ...state.settings
  }
}

export default connect(mapStateToProps)(TextureGrid);
