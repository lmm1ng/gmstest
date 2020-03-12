import React, { Component } from "react";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import { isArrayValidForTable } from "../../utils/isArrayValidForTable";
import PropTypes from "prop-types";

import "./index.css";

export default class TableComp extends Component {
  componentDidMount() {
    this.props.setDataAsync();
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    column: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    maxRowsOnPage: PropTypes.number.isRequired,
    setDataAsync: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired
  };

  render() {
    return this.props.data.length ? (
      isArrayValidForTable(this.props.data) ? (
        <Table celled fixed id="table">
          <Table.Header>
            <Table.Row>
              {Object.keys(this.props.data[0]).map(header => (
                <Table.HeaderCell
                  key={header}
                  id={header}
                  onClick={e => this.props.setSort(e.target.id)}
                >
                  {`${header} ${
                    this.props.order && this.props.column === header
                      ? this.props.order === "asc"
                        ? "▼"
                        : "▲"
                      : ""
                  }`}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.data
              .slice(
                this.props.maxRowsOnPage * (this.props.page - 1),
                this.props.maxRowsOnPage +
                  this.props.maxRowsOnPage * (this.props.page - 1)
              )

              .map(row => (
                <Table.Row>
                  {Object.keys(this.props.data[0]).map(cell => (
                    <Table.Cell key={row[cell]}>{row[cell]}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      ) : (
        <div>Загружаемый файл не валиден!</div>
      )
    ) : (
      <Dimmer page active>
        <Loader />
      </Dimmer>
    );
  }
}
