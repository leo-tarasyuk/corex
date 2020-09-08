import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataJSON } from '../../ducks/site/actions';
import {
  formatDataTable,
  getDataHeaderTable
} from './helpers/formatDataTable';
import { sortTable } from './helpers/sortDataTable';
import Advertising from './Advertising';
import Table from './Table';
import Sort from './Sort';

import './Main.scss';

require('typeface-exo');

class Main extends Component {

  render() {
    const { newDataTable, dataHeaderTable } = this.props;

    return (
      <div className='main'>
        <div className='sort'>
          <div className='title'>SORT BY</div>
          <Sort />
        </div>
        <div className='on-sale'>
          <div className='title'>ON SALE</div>
          <Table data={newDataTable} dataHeader={dataHeaderTable} />
        </div>
        <div className='news'>
          <div className='title'>NEWS</div>
          <Advertising />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getDataJSON();
  }
}

const mapStateToProps = state => {
  const {site: {
    tableData,
    isSortTable,
    columnSort,
  }} = state;

  const newTableData = JSON.parse(JSON.stringify(tableData));
  const sortedDataTable = sortTable(newTableData.products, isSortTable, columnSort);
  const newDataTable = formatDataTable(sortedDataTable);
  const dataHeaderTable = getDataHeaderTable(tableData);

  return {
    newDataTable,
    dataHeaderTable,
  };
}

export default connect(mapStateToProps, { getDataJSON })(Main);
