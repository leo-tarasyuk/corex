import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataJSON } from '../../ducks/site/actions';
import { Icons } from '../../constants/icons/index';
import './Header.scss';

class Header extends Component {
  render() {
    const {
      chosenProducts,
    } = this.props;

    return (
      <div className='header'>
        <div className='header-fixed'>
          <div className="header-logo">
            <div className='logo-name'>
              <div className='logo'>{Icons.logo()}</div>
              <div className='logo-lang'>
                <div className='change-language'>{Icons.earth()}</div>
                <span>ENG</span>
              </div>
            </div>
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
  const { site: { chosenProducts } } = state;

  return { chosenProducts };
}

export default connect(mapStateToProps, { getDataJSON })(Header);