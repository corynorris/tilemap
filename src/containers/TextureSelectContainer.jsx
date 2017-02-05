import { connect } from 'react-redux';
import TextureSelect from '../presenters/Texture/TextureSelect'

const mapStateToProps = (state, ownProps) => {
  return {
    textureLoaded: state.application.textureLoaded,
  }
}

export default connect(mapStateToProps)(TextureSelect);
