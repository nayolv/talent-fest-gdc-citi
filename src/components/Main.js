import React from "react";
import { LateralMenuHome } from "./LateralMenuHome";
import { ModalSia } from "./modal/ModalSia";
import { OfertasHome } from "./OfertasHome";

export const Main = () => {
  return (
    <main>
      <div className="main-container">
      <OfertasHome />
      <LateralMenuHome />
      <ModalSia />
      </div>
      
    </main>
  );
};

