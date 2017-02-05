const initialState = {
  width: 100,
  height: 100,
  tilesWide: 4,
  tilesHigh: 4,
  scale: 1.5,
}

export const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TILES_WIDE':
      return Object.assign(
        {}, state, { 
          tilesWide: action.value 
        }
      );
    case 'SET_TILES_HIGH':
      return Object.assign(
        {}, state, { tilesHigh: action.value }
      );
    case 'SET_SCALE':
      return Object.assign(
        {}, state, { scale: action.value }
      );
    case 'LOAD_TEXTURE':
      const {width, height} = action.image
      return Object.assign(
        {}, state, { 
          width,
          height
         }
      );
    default:
      return state
  }
}