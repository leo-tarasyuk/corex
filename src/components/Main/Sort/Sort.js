import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setChangeSort,
  setStateButton,
} from '../../../ducks/site/actions';
import './Sort.scss';

require('typeface-open-sans');

class Sort extends Component {

  render() {

    const { setChangeSort, setStateButton } = this.props

    return (
      <div className='sort-buttons'>
        <div className='sort-button' onClick={() => setChangeSort('Manufacturer')}>
          <span>By Manufacturer</span>
          <div className='point-lt'></div>
          <div className='point-rt'></div>
          <div className='point-lb'></div>
          <div className='point-rb'></div>
        </div>
        <div className='sort-button' onClick={() => { setStateButton(true, 'Price') }}>
          <span>Minimum price</span>
          <div className='point-lt'></div>
          <div className='point-rt'></div>
          <div className='point-lb'></div>
          <div className='point-rb'></div>
        </div>
        <div className='sort-button' onClick={() => { setStateButton(false, 'Price') }}>
          <span> Maximum price</span>
          <div className='point-lt'></div>
          <div className='point-rt'></div>
          <div className='point-lb'></div>
          <div className='point-rb'></div>
        </div>
      </div>
    )
  }
}

export default connect(() => {}, { setChangeSort, setStateButton })(Sort);
