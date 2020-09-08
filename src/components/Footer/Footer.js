import React, { Component } from 'react';
import { Socials } from '../../constants/social/index';
import './Footer.scss';

class Footer extends Component {
  render() {
    const social = ["facebook", "twitter", "youtube", "reddit"];

    return (
      <div className="footer">
        <ul className='footer-icons'>
          {social.map((item, index) => {
            return (
              <li className="social" key={`sotial${index}`}>
                {Socials.sotialIcons(item)}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Footer;