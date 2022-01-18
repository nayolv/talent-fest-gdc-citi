import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderNav } from './components/HeaderNav';
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import './Scss/layout/footer.scss';
import './Scss/layout/sidebar.scss';
import './Scss/layout/HeaderNav.scss';

function App() {
  return (
    <>
    <HeaderNav/>
    <SideBar/>
    <Footer />
    </>
  );
}

export default App;
