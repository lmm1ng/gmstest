import { connect } from "react-redux";
import { setDataAsync, setSort, setData } from "../actions/table";
import { getSortedData } from "../selectors/getSortedData";
import TableComp from "../components/Table/Table";

export default connect(
  state => ({
    data: state.table.data,
    order: state.table.order,
    column: state.table.column,
    page: state.pagination.page,
    maxRowsOnPage: state.pagination.maxRowsOnPage
  }),
  {
    setDataAsync: () => async (dispatch, getState) => {
      await dispatch(setDataAsync());
      const state = getState();
      const sortedData = getSortedData(state);
      dispatch(setData(sortedData));
    },
    setSort: column => (dispatch, getState) => {
      dispatch(setSort(column));
      const state = getState();
      const sortedData = getSortedData(state);
      dispatch(setData(sortedData));
    }
  }
)(TableComp);
