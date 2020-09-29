import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pictures } from '../../../../../constants/main'
import { countChooseProduct } from '../../../../../ducks/site/actions';

import './LaptopList.scss'

require('typeface-open-sans');

class LaptopList extends Component {
    render() {
        const {
            countChooseProduct,
            chosenProducts,
            dataList
        } = this.props;

        const isChecked = id => {
            return chosenProducts.find(item => item === id)
        }

        return (
            <>
                <div className='laptop-table'>
                    <div className='description'>
                        <div className='text-description'>
                            <div>{dataList.name}</div>
                            <div>{dataList.Hash}</div>
                        </div>
                        <div className='star' onClick={() => countChooseProduct(dataList.id)}>{Pictures.star(isChecked(dataList.id))}</div>
                    </div>
                    <div className='picture'>
                        {dataList.id && <img src={require(`../../../../../images/${dataList.id}.png`)} alt={dataList.name} />}
                    </div>
                    <div className='laptop-price'>{`${dataList.Price.minPrice} - ${dataList.Price.maxPrice}`}</div>
                    <div className='point-lt'></div>
                    <div className='point-rt'></div>
                    <div className='point-lb'></div>
                    <div className='point-rb'></div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    const { site: { chosenProducts } } = state;

    return { chosenProducts }
}

export default connect(mapStateToProps, { countChooseProduct })(LaptopList);
