export const actionType = {
  SET_USER: 'SET_USER',
  SET_PRODUCT_ITEMS: 'SET_PRODUCT_ITEMS',
}

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_PRODUCT_ITEMS:
      return {
        ...state,
        productItems: action.productItems,
      };

    default:
      return state;
  }
};

export default reducer;