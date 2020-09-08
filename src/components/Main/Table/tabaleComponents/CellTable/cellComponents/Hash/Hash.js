import React, { Component } from 'react';

class Hash extends Component {
    render() {
        const { hash } = this.props;

        return (
            <>
                <td className='cell'>
                    {hash}
                </td>
            </>
        )
    }
}

export default Hash;