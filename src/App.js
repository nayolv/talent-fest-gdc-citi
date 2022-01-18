import "bootstrap/dist/css/bootstrap.min.css";
/* import { Home } from "./pages/Home"; */
import "./Scss/Layout/home.scss"
import { HeaderNav } from './components/HeaderNav';
import Footer from "./components/Footer";
import './Scss/Layout/footer.scss';
import './Scss/Layout/sidebar.scss';
import './Scss/Layout/HeaderNav.scss';
import Transfers from "./pages/Transfers";
import SideBar from "./components/SideBar";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App() {
  return (
    <>
    <HeaderNav/>
   {/*  <Home /> */}
    <SideBar/>
    <Transfers />
    <Page3 />
    <Footer />
    <Page4 />
    </>
  );
}

export default App;
/*
    <SideBar/>

*/