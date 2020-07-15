export const initialState = {
  basket: [
    {
      id: 123,
      title: "Test",
      rating: 3,
      image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
      price: 59.99
    }
  ]
}

export const reducer = (state, action) => {
  const {type, item, id} = action;
  switch (type) {
    case 'ADD_TO_BASKET':
      return {...state, basket: [...state.basket, item]};
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];
      const i = state.basket.findIndex(basketItem => basketItem.id === id);
      if (i >= 0 ) {
        newBasket.splice(i, 1);
      } else {
        console.warn(`Can't remove product (id: ${id} as it is not an existing item`)
      }
      return {...state, basket: newBasket}
    default:
      return state;
  }
}