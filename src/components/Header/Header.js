import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataJSON, setStateWindow } from '../../ducks/site/actions';
import { Icons } from '../../constants/icons/index';
import Sort from '../Main/Sort';

import './Header.scss';

class Header extends Component {
  render() {
    const {
      chosenProducts,
      settingsWindow,
      setStateWindow
    } = this.props;

    return (
      <div className='header'>
        <div className='header-fixed'>
          <div className="header-logo">
            <div className="controls">
              {!settingsWindow && <div className="icon-controls" onClick={() => setStateWindow()}>{Icons.controls()}</div>}
              {settingsWindow && <div className="settings">
                <div className="icon-controls" onClick={() => setStateWindow()}>{Icons.cross()}</div>
                <div className='sort'>
                  <Sort />
                </div>
              </div>}
            </div>
            <div className='logo-name'>
              <div className='logo'>{Icons.logo()}</div>
              <div className='logo-lang'>
                <div className='change-language'>{Icons.earth()}</div>
                <span>ENG</span>
              </div>
            </div>
            <div className='logo-smart'>{Icons.logoSmart()}</div>
            <div className='basket-with-products'>
              <div className='basket'>{Icons.basket()}</div>
              <span>{chosenProducts.length}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  async componentDidMount() {
    getDataJSON();
  }
}

const mapStateToProps = state => {
  const { site: { chosenProducts, settingsWindow } } = state;

  return { chosenProducts, settingsWindow };
}

export default connect(mapStateToProps, { getDataJSON, setStateWindow })(Header);