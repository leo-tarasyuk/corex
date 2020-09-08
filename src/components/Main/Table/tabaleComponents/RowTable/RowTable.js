import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDataRow } from './helper/formatDataRow';
import CellTable from '../CellTable';

import './RowTable.scss'

require('typeface-open-sans');

class RowTable extends Component {
    render() {
        const { newDataRow } = this.props

        return (
            <tr className='row-products'>
                {
                    newDataRow.map((item, index) => {
                        return (
                            <CellTable dataCell={item} numberColumn={index} key={`cell${index}`} />
                        )
                    })
                }
            </tr>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { dataRow } = ownProps;
    const newDataRow = formatDataRow(dataRow);

    return { newDataRow };
}

export default connect(mapStateToProps, {})(RowTable);