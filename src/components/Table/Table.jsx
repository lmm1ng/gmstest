import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import "./index.css";
import { isArrayValidForTable } from "../../utils/isArrayValidForTable";

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
                <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.data.map(row => (
              <Table.Row>
                {Object.keys(this.props.data[0]).map(cell => (
                  <Table.Cell>{row[cell]}</Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div>Загружаемый файл не валиден!</div>
      )
    ) : (
      <div>Загрузка...</div>
    );
  }
}
