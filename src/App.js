import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/Layout/home.scss";
import "./Scss/Layout/footer.scss";
import "./Scss/Layout/sidebar.scss";
import "./Scss/Layout/HeaderNav.scss";
import "../src/App.css";
import './Scss/Layout/CorfimRegister.scss';
import './Scss/Layout/Tooltip.scss';
import { Home } from "./pages/Home";
import { HeaderNav } from "./components/HeaderNav";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Transfers from "./components/Forms/Tranferences/Transfers";
import OwnAccount from "./components/Forms/Tranferences/OwnAccount";
import DataRegister from "./components/Forms/Register/DataRegister";
import AccountRegister from "./components/Forms/Register/AccountRegister";
import ThirdAccount from "./components/Forms/Tranferences/ThirdAccount";
import { useTransfers } from "./hooks/useTransfers";
import useRegister from "./hooks/Register/UseRegister";
import { Verification } from "./components/Forms/Tranferences/Verification";
import { Confirmation } from "./components/Forms/Tranferences/Confirmation";
import { Context } from "./components/modal/Context";
import DataVerification from "./components/Forms/Register/DataVerification";

function App() {
  const {
    typeRegister,
    newRegister,
    sendData,
    dataRegister,
    handleInputChange,
    checked,
    handleChecked,
    postDataAccount 
  } = useRegister();

  const {
    recoverySelectValue,
    recoverySelectValueRet,
    selectValue,
    getDataTransfer,
    result,
    resultRetirement,
    handleChange,
    importe,
    mapeoRetirement,
    mapeoRet,
    mapeo,
    mapeoDep,
    balanceDep,
    balanceDeposito,
    patchApiOwn,
    balance,
    newBalance,
    patchApiOwnDep,
    descriptionTransfer,
    recoveryDescription,
    hora,
    hour,
    getHour

  } = useTransfers();

  const [tooltipOn, setTooltipOn] = useState(true);

    const isTooltipOn = () => {
        setTooltipOn(!tooltipOn);
    }

  return (
    <>
    <Context>
      <Router>
        {/* {tooltipOn ? (<HeaderNav getDataTransfer={getDataTransfer} />):(<HeaderNavTooltip getDataTransfer={getDataTransfer} />)} */}
        <HeaderNav getDataTransfer={getDataTransfer} tooltipOn={tooltipOn} />
        <Routes>
      {/*    {tooltipOn ? ( <Route
            path="/"
            element={<Home resultRetirement={resultRetirement} isTooltipOn={isTooltipOn} />}
          />) : ( <Route
            path="/"
            element={<HomeTootltip resultRetirement={resultRetirement} isTooltipOn={isTooltipOn} />}
          />)} */}
          <Route path="/" element={<Home resultRetirement={resultRetirement} isTooltipOn={isTooltipOn} tooltipOn={tooltipOn} />}/>
          <Route path="services/" element={<Services />}>
            <Route
              index
              element={
                <Transfers
                  recoverySelectValueRet={recoverySelectValueRet}
                  recoverySelectValue={recoverySelectValue}
                  selectValue={selectValue}
                  getDataTransfer={getDataTransfer}
                  result={result}
                  resultRetirement={resultRetirement}
                  mapeoRetirement={mapeoRetirement}
                  mapeo={mapeo}
                />
              }
            />
            <Route
              exact
              path="register"
              element={
                <DataRegister
                  typeRegister={typeRegister}
                  newRegister={newRegister}
                />
              }
            />
            <Route
              path="own-account"
              element={
                <OwnAccount
                  handleChange={handleChange}
                  importe={importe}
                  mapeoRet={mapeoRet}
                  mapeoDep={mapeoDep}
                  hora={hora}
                />
              }
            />
            <Route
              path="verification-transfer"
              element={
                <Verification
                  mapeoRet={mapeoRet}
                  mapeoDep={mapeoDep}
                  importe={importe}
                  balanceDeposito={balanceDeposito}
                  newBalance={newBalance}
                  descriptionTransfer={descriptionTransfer}
                  getHour={getHour}
                  hora={hora}
                />
              }
            />
            <Route
              path="confirmation"
              element={
                <Confirmation
                  mapeoRet={mapeoRet}
                  mapeoDep={mapeoDep}
                  importe={importe}
                  balanceDep={balanceDep}
                  balance={balance}
                  patchApiOwn={patchApiOwn}
                  patchApiOwnDep={patchApiOwnDep}
                  descriptionTransfer={descriptionTransfer}
                  hour={hour}
                />
              }
            />

            <Route
              path="third-account"
              element={
                <ThirdAccount
                  handleChange={handleChange}
                  importe={importe}
                  mapeoRet={mapeoRet}
                  mapeoDep={mapeoDep}
                  recoveryDescription={recoveryDescription}
                />
              }
            />

            <Route
              path="formRegister"
              element={
                <AccountRegister
                  sendData={sendData}
                  dataRegister={dataRegister}
                  handleInputChange={handleInputChange}
                  checked={checked}
                  handleChecked={handleChecked}
                />
              }
            />
            <Route
              path="verification"
              element={
                <DataVerification
                dataRegister={dataRegister}
                checked={checked}
                postDataAccount ={postDataAccount}
                />
              }
            />
          </Route>
        </Routes>
        <Footer tooltipOn={tooltipOn} />
      </Router>
      </Context>
    </>
  );
}

export default App;
