import React from "react";
import { LateralMenuHome } from "./LateralMenuHome";
import { OfertasHome } from "./OfertasHome";

export const Main = ({ resultRetirement }) => {
  return (
    <main>
      <div className="main-container">
      <OfertasHome resultRetirement={resultRetirement} />
      <LateralMenuHome />
      </div>
      
    </main>
  );
};

