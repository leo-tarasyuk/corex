import React, { Component } from 'react';

import './Price.scss'

class Price extends Component {
    render() {
        const { price } = this.props;
        const { minPrice, maxPrice } = price;

        return (
            <>
                <td className='prices cell'>
                    {`${minPrice} - ${maxPrice}`}
                    <div className='point-rt'></div>
                    <div className='point-rb'></div>
                </td>
            </>
        )
    }
}

export default Price;