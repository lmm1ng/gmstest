import { connect } from "react-redux";
import { setPage } from "../actions/pagination";
import { getMaxPage } from "../selectors/getMaxPage";
import PaginationComp from "../components/Pagination/Pagination";

export default connect(
  state => ({
    maxPage: getMaxPage(state)
  }),
  { setPage }
)(PaginationComp);
