/* import "bootstrap/dist/css/bootstrap.min.css"; */
 import { HeaderNav } from "./components/HeaderNav";
import { Home } from "./pages/Home";
import "./Scss/Layout/home.scss"
import Footer from "./components/Footer";
import './Scss/Layout/footer.scss';
import './Scss/Layout/HeaderNav.scss';
import AccountRegistrations from "./components/Forms/registration.js/AccountRegistrations";
 import DataTranfer from "./components/Forms/Tranferences/DataTranfer"; 
import ThirdAccount from "./components/Forms/Tranferences/ThirdAccount";
import OwnAccount from "./components/Forms/Tranferences/OwnAccount";
import DataRegister from "./components/Forms/registration.js/DataRegister";




function App() {
  return (
    <>
    <HeaderNav />
    <Home /> 
    <Footer />
    <DataTranfer /> 
    <AccountRegistrations/>
    <ThirdAccount />
    <OwnAccount />
    <DataRegister />
    </>
  );
}

export default App;
