import React, { Component } from "react";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import { isArrayValidForTable } from "../../utils/isArrayValidForTable";

import "./index.css";

export default class TableComp extends Component {
  componentDidMount() {
    this.props.setDataAsync();
  }

  render() {
    return this.props.data.length ? (
      isArrayValidForTable(this.props.data) ? (
        <Table celled id="table">
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
            {this.props.data.map(row => (
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
