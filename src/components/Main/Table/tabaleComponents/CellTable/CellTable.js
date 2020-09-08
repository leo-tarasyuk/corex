import React, { Component } from 'react';
import { getCellComponents } from './helpers/getCellComponents';

import './CellTable.scss'

class CellTable extends Component {

    render() {
        const {
            dataCell
        } = this.props
        return (
            <>
                {
                    getCellComponents(dataCell)
                }
            </>
        )
    }
}

export default CellTable;