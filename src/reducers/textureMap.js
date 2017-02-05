const initialState = {}

export const textureMap = (state = initialState, action) => {
  switch (action.type) {
    case 'APPLY_STYLE':
      const newStyle = {};
      newStyle[action.key] = action.style;
      return Object.assign(
        {}, state, newStyle
      );
    case 'SET_TILES_WIDE':
      return initialState;
    case 'SET_TILES_HIGH':
      return initialState;
    default:
      return state
  }
}