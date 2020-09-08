import React, { Component } from 'react';

import './Profit.scss'

class Profit extends Component {
    render() {
        const { profit } = this.props;

        return (
            <>
                <td className='cell'>
                    <span className='profits'>{profit}</span> / day
                </td>
            </>
        )
    }
}

export default Profit;