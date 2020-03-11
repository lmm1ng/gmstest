const initialState = {
  data: [],
  order: 'asc',
  column: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
