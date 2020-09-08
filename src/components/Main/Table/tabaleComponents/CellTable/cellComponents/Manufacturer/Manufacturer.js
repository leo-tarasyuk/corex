import React, { Component } from 'react';

class Manufacturer extends Component {
    render() {
        const { manufacturer } = this.props;

        return (
            <>
                <td className='cell'>
                    {manufacturer}
                </td>
            </>
        )
    }
}

export default Manufacturer;