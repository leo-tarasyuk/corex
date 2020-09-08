import React, { Component } from 'react';

class Algorithm extends Component {
    render() {
        const { algorithm } = this.props;

        return (
            <td className='cell cell-show'>
                {algorithm}
            </td>
        )
    }
}

export default Algorithm;