import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/Layout/home.scss";
import "./Scss/Layout/footer.scss";
import "./Scss/Layout/sidebar.scss";
import "./Scss/Layout/HeaderNav.scss";
import { Home } from "./pages/Home";
import { HeaderNav } from "./components/HeaderNav";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Transfers from "./components/Forms/Tranferences/Transfers";
import OwnAccount from "./components/Forms/Tranferences/OwnAccount";
import DataRegister from "./components/Forms/Register/DataRegister";
import AccountRegister from "./components/Forms/Register/AccountRegister";
import ThirdAccount from "./components/Forms/Tranferences/ThirdAccount";
import { useState } from "react";

function App() {
  const [selectValue, setSelectValue] = useState("");
  const [selectValueRetirement, setSelectValueRetirement] = useState("");

  const recoverySelectValue = (e) => {
    setSelectValue(e.target.value);
  };

  const recoverySelectValueRet = (e) => {
    setSelectValueRetirement(e.target.value);
  };

  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services/" element={<Services />}>
            <Route
              index
              element={
                <Transfers
                  recoverySelectValueRet={recoverySelectValueRet}
                  recoverySelectValue={recoverySelectValue}
                  selectValue={selectValue}
                />
              }
            />
            <Route exact path="register" element={<DataRegister />} />
            <Route
              path="own-account"
              element={
                <OwnAccount
                  selectValueRetirement={selectValueRetirement}
                  selectValue={selectValue}
                />
              }
            />
            <Route
              path="third-account"
              element={
                <ThirdAccount
                  selectValueRetirement={selectValueRetirement}
                  selectValue={selectValue}
                />
              }
            />
            <Route path="formRegister" element={<AccountRegister />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
