import React from "react";
// import SideBar from '../components/SideBar'
import { Outlet } from "react-router-dom";
import AccountRegister from "../components/Forms/Register/AccountRegister";
import Transfers from "../components/Forms/Tranferences/Transfers";
import SideBar from "../components/SideBar";

const Services = () => {
    console.log(window.location.pathname);
  return (
    <>
      {window.location.pathname === "/services" ? (
        <>
          <Transfers />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Services;
