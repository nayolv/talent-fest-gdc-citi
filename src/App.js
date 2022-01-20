

import AccountRegistrations from "./components/Forms/registration.js/AccountRegistrations";
 import DataTranfer from "./components/Forms/Tranferences/DataTranfer"; 
import ThirdAccount from "./components/Forms/Tranferences/ThirdAccount";
import OwnAccount from "./components/Forms/Tranferences/OwnAccount";
import DataRegister from "./components/Forms/registration.js/DataRegister";



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



function App() {
  return (
    <>

      <Router>
        <HeaderNav />
        <Routes>
          <DataTranfer /> 
         <AccountRegistrations/>
        <ThirdAccount />
         <OwnAccount />
         <DataRegister />
          <Route path="/" element={<Home />} />
          <Route path="Services/*" element={<Services />}>
          
          </Route>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;

