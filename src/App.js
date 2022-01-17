import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderNav } from './components/HeaderNav';
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import './Scss/Layout/footer.scss';

function App() {
  return (
    <>
    <HeaderNav/>
    <SideBar />
    <Footer />
    </>
  );
}

export default App;
