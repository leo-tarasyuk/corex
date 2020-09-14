import React, { Component } from 'react';
import { Pictures } from '../../../constants/main/index';
import './Advertising.scss';

require('typeface-exo');

class Advertising extends Component {

  render() {
    return (
      <div className='show-pictures'>
        <div className='points'>
          <label className='custom-checkbox'>
            <input type="radio" className="checkbox knopka1" name="slider" defaultChecked />
            <span className="new-checkbox"></span>
          </label>
          <label className='custom-checkbox '>
            <input type="radio" className="checkbox knopka2" name="slider" />
            <span className="new-checkbox"></span>
          </label>
          <label className='custom-checkbox'>
            <input type="radio" className="checkbox knopka3" name="slider" />
            <span className="new-checkbox"></span>
          </label>
        </div>
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
          <div className='point-lt'></div>
          <div className='point-rt'></div>
          <div className='point-lb'></div>
          <div className='point-rb'></div>
        </div>
      </div>
    )
  }
}

export default Advertising;