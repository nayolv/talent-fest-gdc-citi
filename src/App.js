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

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services/" element={<Services />} >
          <Route index element={<Transfers />} />
          <Route exact path="register" element={<DataRegister />} />

            </Route>
          {/* </Route>
            <Route index element={<Transfers />} />
            <Route path="own-account" element={<OwnAccount />} />
            <Route path="register" element={<DataRegister />} />
            <Route path="formRegister" element={<AccountRegister />} />
            <Route path="third-account" element={<ThirdAccount />} />
          </Route> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
