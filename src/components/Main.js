import React from "react";
import { LateralMenuHome } from "./LateralMenuHome";
import { OfertasHome } from "./OfertasHome";

export const Main = () => {
  return (
    <main>
      <div className="main-container">
      <OfertasHome />
      <LateralMenuHome />
      </div>
      
    </main>
  );
};

