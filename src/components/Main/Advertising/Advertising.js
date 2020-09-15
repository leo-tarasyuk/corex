import React, { Component } from 'react';
import { Pictures } from '../../../constants/main/index';
import './Advertising.scss';

require('typeface-exo');

class Advertising extends Component {

  render() {
    const listAdvertising = side => {
      const items = document.querySelector('.pictures').style;
      switch (side) {
        case 1: items.transform = "translate(0%)";
          break;
        case 2: items.transform = "translate(-33.33%)";
          break;
        case 3: items.transform = "translate(-66.66%)";
          break;
        default: items.transform = "translate(0%)";
      }
    }

    return (
      <div className='show-pictures'>
        <div className='points'>
          <input className="checkbox" id="k1" type="radio" name="radio" defaultChecked />
          <label htmlFor="k1" className="new-checkbox" onClick={() => listAdvertising(1)}></label>

          <input className="checkbox" id="k2" type="radio" name="radio" />
          <label htmlFor="k2" className="new-checkbox" onClick={() => listAdvertising(2)}></label>

          <input className="checkbox" id="k3" type="radio" name="radio" />
          <label htmlFor="k3" className="new-checkbox" onClick={() => listAdvertising(3)}></label>
        </div>
        <div className='pictures'>
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

      </div>
    )
  }
}

export default Advertising;