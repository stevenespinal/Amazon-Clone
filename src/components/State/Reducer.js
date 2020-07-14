export const initialState = {
  basket: []
}

export const reducer = (state, action) => {
  const {type, item} = action;
  switch (type) {
    case 'ADD_TO_BASKET':
      return {...state, basket: [...state.basket, item]};
    case 'REMOVE_FROM_BASKET':
      return {...state}
    default:
      return state;
  }
}