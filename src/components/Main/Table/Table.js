import React, { Component } from 'react';
import { connect } from 'react-redux';
import RowTable from './tabaleComponents/RowTable';
import HeadRow from './tabaleComponents/HeadRow';
import { Pictures } from '../../../constants/main'
import { countChooseProduct } from '../../../ducks/site/actions';

import './Table.scss';

require('typeface-open-sans');

class Table extends Component {

  render() {
    const {
      data,
      dataHeader,
      countChooseProduct,
      chosenProducts
    } = this.props;

    const { dataTable, nameColumn } = data;

    const isChecked = id => {
      return chosenProducts.find(item => item === id)
    }

    return (
      <div>
        {
          nameColumn && nameColumn.map((item, index) => {
            return (
              <div className='laptop-table' key={`laptop${index}`}>
                <div className='description'>
                  <div className='text-description'>
                    <div>{item.name}</div>
                    <div>{item.Hash}</div>
                  </div>
                  <div className='star' onClick={() => countChooseProduct(item.id)}>{Pictures.star(isChecked(item.id))}</div>
                </div>
                <div className='picture'>
                  {item.id && <img src={`../../../images/${item.id}.png`} alt='' />}
                </div>
                <div className='laptop-price'>{`${item.Price.minPrice} - ${item.Price.maxPrice}`}</div>
                <div className='point-lt'></div>
                <div className='point-rt'></div>
                <div className='point-lb'></div>
                <div className='point-rb'></div>
              </div>
            )
          })
        }
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { site: { chosenProducts } } = state;

  return { chosenProducts }
}

export default connect(mapStateToProps, { countChooseProduct })(Table);