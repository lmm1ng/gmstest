import React from "react";
import { Pagination } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./index.css";

const PaginationComp = ({ maxPage, setPage }) =>
  maxPage ? (
    <Pagination
      id="pagination"
      defaultActivePage={1}
      totalPages={maxPage}
      onPageChange={(e, data) => setPage(data.activePage)}
    />
  ) : null;

PaginationComp.propTypes = {
  maxPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default PaginationComp;
