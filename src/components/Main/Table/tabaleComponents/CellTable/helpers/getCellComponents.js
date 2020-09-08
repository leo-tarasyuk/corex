import React from "react";

import CellStar from '../cellComponents/CellStar'
import Release from '../cellComponents/Release'
import Manufacturer from '../cellComponents/Manufacturer'
import Model from '../cellComponents/Model'
import Hash from '../cellComponents/Hash'
import Algorithm from '../cellComponents/Algorithm'
import Efficiency from '../cellComponents/Efficiency'
import Profit from '../cellComponents/Profit'
import Price from '../cellComponents/Price'

export function getCellComponents(data) {
    if (!data) return {};

    switch (data[0]) {
        case 'id': return <CellStar id={data[1]}/>
        case 'Release': return <Release release={data[1]} />
        case 'Manufacturer': return <Manufacturer manufacturer={data[1]}/>
        case 'Model': return <Model model={data[1]}/>
        case 'Hash': return <Hash hash={data[1]}/>
        case 'Algorithm': return <Algorithm algorithm={data[1]}/>
        case 'Efficiency': return <Efficiency efficiency={data[1]}/>
        case 'Profit': return <Profit profit={data[1]}/>
        case 'Price': return <Price price={data[1]}/>
        default: return ''
    }
}