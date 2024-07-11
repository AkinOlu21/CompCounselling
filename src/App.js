import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <>
    <div >
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
  </Routes>
    </div>

    
    <Footer/>
    </>
  );
}

export default App;
