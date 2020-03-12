import { createSelector } from "reselect";

const getDataLength = state => state.table.data.length;
const getMaxRowsOnPage = state => state.pagination.maxRowsOnPage;

export const getMaxPage = createSelector(
  [getDataLength, getMaxRowsOnPage],
  (dataLength, maxRowsOnPage) =>
    dataLength ? Math.ceil(dataLength / maxRowsOnPage) : 0
);
