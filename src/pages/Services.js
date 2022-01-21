import React from "react";
import { Outlet } from "react-router-dom";


const Services = () => {
    console.log(window.location.pathname);
  return (
    <Outlet />
  );
};

export default Services;
