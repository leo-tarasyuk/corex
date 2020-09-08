import React, { Component } from 'react';

class Model extends Component {
    render() {
        const { model } = this.props;

        return (
            <>
                <td className='cell cell-show'>
                    {model}
                </td>
            </>
        )
    }
}

export default Model;