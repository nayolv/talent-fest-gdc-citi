import React from 'react'
import { Main } from '../components/Main'
// import '../Scss/Layout/Tooltip.scss'


export const Home = ({ tooltipOn, isTooltipOn }) => {

    return (
        < >
        <Main tooltipOn={tooltipOn} isTooltipOn={isTooltipOn} />
        </>
    )
}
