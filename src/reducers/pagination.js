const initialState = {
  page: 1,
  maxRowsOnPage: 16
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload
      };

    default:
      return state;
  }
};
