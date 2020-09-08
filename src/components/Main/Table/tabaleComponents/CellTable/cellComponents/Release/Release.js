import React, { Component } from 'react';

class Release extends Component {


    render() {
        const { release } = this.props;

        return (
            <>
                <td className='cell'>
                    {release}
                </td>
            </>
        )
    }
}

export default Release;