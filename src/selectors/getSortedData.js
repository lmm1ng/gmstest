import { createSelector } from "reselect";
import * as R from "ramda";

const getData = state => state.table.data;
const getOrder = state => state.table.order;
const getColumn = state => state.table.column;

export const getSortedData = createSelector(
  [getData, getOrder, getColumn],
  (data, order, column) => {
    if (column && order) {
      return order === "asc"
        ? R.sort(R.ascend(R.compose(R.toLower, R.prop(column))), data)
        : R.sort(R.descend(R.compose(R.toLower, R.prop(column))), data)
    }
    return data;
  }
);
