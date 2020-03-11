import { connect } from "react-redux";
import { setDataAsync } from "../actions/table";
import TableComp from '../components/Table/Table'

export default connect(
  state => ({
    data: state.table.data,
    order: state.table.order,
    column: state.table.column
  }),
  { setDataAsync }
)(TableComp);
