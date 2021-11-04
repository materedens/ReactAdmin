import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
       <Topbar />
       <Sidebar />
       <Main />
       <Footer />
    </>
  );
}

export default App;
