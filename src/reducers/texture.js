export const texture = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_TEXTURE':
      return action.image;
    default:
      return state
  }
}