import React, { Component } from 'react';
import { getHeadComponents } from './helpers/getHeadComponents';

import './HeadRow.scss'

require('typeface-open-sans');

class HeadRow extends Component {
    render() {
        const { headRow } = this.props

        return (
            <>
                {
                    getHeadComponents(headRow)
                }
            </>
        )
    }
}

export default HeadRow;