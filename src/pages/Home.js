import React from 'react'
import { Main } from '../components/Main'


export const Home = ({ tooltipOn, isTooltipOn, resultRetirement}) => {

    return (
        < >
        <Main tooltipOn={tooltipOn} isTooltipOn={isTooltipOn} resultRetirement={resultRetirement} />
        </>
    )
}
