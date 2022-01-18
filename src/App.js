import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import "./Scss/Layout/home.scss"
import { HeaderNav } from './components/HeaderNav';
import Footer from "./components/Footer";
import './Scss/Layout/footer.scss';
import './Scss/Layout/sidebar.scss';
import './Scss/Layout/HeaderNav.scss';

function App() {
  return (
    <>
    <HeaderNav/>
    <Home />
    <Footer />
    </>
  );
}

export default App;
/*
    <SideBar/>

*/