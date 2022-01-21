import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import "./Scss/Layout/home.scss";
import { HeaderNav } from "./components/HeaderNav";
import Footer from "./components/Footer";
import "./Scss/Layout/footer.scss";
import "./Scss/Layout/sidebar.scss";
import "./Scss/Layout/HeaderNav.scss";
import Services from "./pages/Services";
import Transfers from "./components/Forms/Tranferences/Transfers";
import OwnAccount from "./components/Forms/Tranferences/OwnAccount";
import DataRegister from "./components/Forms/Register/DataRegister";
import AccountRegister from "./components/Forms/Register/AccountRegister";
import ThirdAccount from "./components/Forms/Tranferences/ThirdAccount";
import { useState } from "react";

function App() {
  const [selectValueDeposit, setSelectValueDeposit] = useState("");


  const recoverySelectValue = (e) => {
    //let index = e.target.selectedIndex;
    selectValueDeposit(e.target.value);
  };
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services/" element={<Services />}>
            <Route index element={<Transfers recoverySelectValue={recoverySelectValue} selectValue={selectValueDeposit} />} />
            <Route exact path="register" element={<DataRegister />} />
            <Route path="own-account" element={<OwnAccount selectValue={selectValueDeposit} />} />
            <Route path="third-account" element={<ThirdAccount />} />
            <Route path="formRegister" element={<AccountRegister />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
