import React from "react";
import { LateralMenuHome } from "./LateralMenuHome";
import { ModalSia } from "./modal/ModalSia";
import { OfertasHome } from "./OfertasHome";
import { ThemeContext} from "./modal/Context" 

export const Main = ({ resultRetirement, isTooltipOn, tooltipOn }) => {

  const {changeColor, setChangeColor} = React.useContext(ThemeContext);

  return (

    <main   style = { {background: changeColor.background} } >
      <div className="main-container" >
      <OfertasHome resultRetirement={resultRetirement} tooltipOn={ tooltipOn }/>
      <LateralMenuHome tooltipOn={ tooltipOn }/>
      <ModalSia isTooltipOn={ isTooltipOn } />
      </div>
      
    </main>
  );
};

