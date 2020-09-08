import React, { Component } from 'react';

class Efficiency extends Component {
    render() {
        const { efficiency } = this.props;

        return (
            <>
                <td className='cell'>
                    {efficiency}
                </td>
            </>
        )
    }
}

export default Efficiency;