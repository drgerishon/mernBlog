import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />\
       <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
