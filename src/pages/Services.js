import { Outlet } from "react-router-dom";
import React from "react";
import { ThemeContext } from "../components/modal/Context";

const Services = () => {
  const { changeColor, setChangeColor } = React.useContext(ThemeContext);

  return (
    <div
      className="container-form "
      style={{ background: changeColor.background }}
    >
        <Outlet />
    </div>
  );
};

export default Services;
