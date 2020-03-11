const initialState = {
  data: [],
  order: "",
  column: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "SET_SORT":
      return state.column !== action.payload
        ? { ...state, column: action.payload, order: "asc" }
        : state.order === "asc"
        ? { ...state, order: "desc" }
        : { ...state, order: "asc" };

    default:
      return state;
  }
};
