import axios from "axios";

export const setData = array => ({
  type: "SET_DATA",
  payload: array
});

export const setSort = string => ({
    type: "SET_SORT",
    payload: string
  });

export const setDataAsync = () => {
  return dispatch => {
    axios
      .get(
        "https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json"
      )
      .then(response => dispatch(setData(response.data)))
      .catch(err => console.log(err));
  };
};
