import React from "react";

export function getHeadComponents(data) {
    if (!data) return {};

    switch (data) {
        case 'id': return <th className='th-head'>{data}</th>
        case 'Release': return <th className='th-head'>{data}</th>
        case 'Manufacturer': return <th className='th-head'>{data}</th>
        case 'Model': return <th className='th-head head-show'>{data}</th>
        case 'Hash': return <th className='th-head'>{data}</th>
        case 'Algorithm': return <th className='th-head head-show'>{data}</th>
        case 'Efficiency': return <th className='th-head'>{data}</th>
        case 'Profit': return <th className='th-head'>{data}</th>
        case 'Price': return <th className='th-head'>{data}</th>
        default: return ''
    }
}