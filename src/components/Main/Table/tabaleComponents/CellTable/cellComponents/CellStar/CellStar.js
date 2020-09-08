import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pictures } from '../../../../../../../constants/main'
import { countChooseProduct } from '../../../../../../../ducks/site/actions';


import './CellStar.scss';

class CellStar extends Component {

    render() {
        const {
            id,
            countChooseProduct,
            chosenProducts
        } = this.props;

        const isChecked = chosenProducts.find(item => item === id)

        return (
            <td className='first-column cell' >
                <div className='star' onClick={() => countChooseProduct(id)}>{Pictures.star(isChecked)}</div>
                <div className='point-lt'></div>
                <div className='point-lb'></div>
                <div className='arrow'>{Pictures.greenArrow()}</div>
            </td>
        )
    }
}

const mapStateToProps = state => {
    const { site: { chosenProducts } } = state;

    return { chosenProducts }
}


export default connect(mapStateToProps, { countChooseProduct })(CellStar);