const initialState = {
  textureLoaded: false,
  mapLoaded: false,
}
export const application = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TEXTURE':
      return Object.assign(
        {}, state, { textureLoaded: true }
      );
    case 'LOAD_MAP':
      return Object.assign(
        {}, state, { mapLoaded: true }
      );
    default:
      return state
  }
}