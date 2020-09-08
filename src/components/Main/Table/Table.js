import React, { Component } from 'react';
import RowTable from './tabaleComponents/RowTable';
import HeadRow from './tabaleComponents/HeadRow';
import './Table.scss';

require('typeface-open-sans');

class Table extends Component {

  render() {
    const { data, dataHeader } = this.props;
    const { dataTable } = data;

    return (
      <table className='table-sale' cellSpacing="0">
        <thead className='table-head'>
          <tr className='tr-head'>
            {
              dataHeader && dataHeader.map((item, index) => {
                return (
                  <HeadRow headRow={item} key={`head${index}`} />
                )
              })
            }
          </tr>
          <tr className='point-lt'></tr>
          <tr className='point-rt'></tr>
          <tr className='point-lb'></tr>
          <tr className='point-rb'></tr>
        </thead>
        <tbody className='table-body'>
          {
            dataTable && dataTable.map((item, index) => {
              return (
                <RowTable dataRow={item} key={`row${index}`} />
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Table;