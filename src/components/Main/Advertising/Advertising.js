import React, { Component } from 'react';
import { Pictures } from '../../../constants/main/index';
import './Advertising.scss';

require('typeface-exo');

class Advertising extends Component {

  render() {
    return (
      <div className='advertising'>
        <div className='logo-picture'>{Pictures.logoName()}</div>
        <div className='text-crypto'>
          THE STANDART FOR CRYPTO CONSULTING
        </div>
        <ul className='properties'>
          <li>Mining Operations</li>
          <li>ICO (Initial Coin Offering)</li>
          <li>New Business Investment</li>
          <li>Blockchain Technology</li>
        </ul>
        <div className='logo-building'>{Pictures.logoBuilding()}</div>
        <div className='points'>{Pictures.checkboxs()}</div>
        <div className='point-lt'></div>
        <div className='point-rt'></div>
        <div className='point-lb'></div>
        <div className='point-rb'></div>
      </div>
    )
  }
}

export default Advertising;