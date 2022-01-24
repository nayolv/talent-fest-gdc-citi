import React from "react";
import { ModalSia } from "./modal/ModalSia";
import { ThemeContext } from "./modal/Context";
import { OfertasHomeTooltip } from "./OfertasHomeTooltip";
import { LateralMenuHomeTooltip } from "./LateralMenuHomeTooltip";

export const Maintooltip = ({ resultRetirement, isTooltipOn }) => {
  const { changeColor, setChangeColor } = React.useContext(ThemeContext);

  return (
    <main style={{ background: changeColor.background }}>
      <div className="main-container">
        <OfertasHomeTooltip resultRetirement={resultRetirement} />
        <LateralMenuHomeTooltip />
        <ModalSia isTooltipOn={isTooltipOn} />
      </div>
    </main>
  );
};
