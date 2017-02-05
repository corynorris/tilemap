const initialState = [
  []
];

export const map = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MAP':
      return action.map;
    default:
      return state
  }
}