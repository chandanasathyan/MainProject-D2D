
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Testmonials from './pages/testmonials/Testmonials';
import Domain from './pages/domains/domain'
import About from './pages/aboutus/About'
import Footer from './components/header/footer/Footer';


function App() {
  return (
    <>

<Header/>

  <Routes>

         <Route path="/" element={<Home/>} />
 <Route path="/testimonials" element={<Testmonials/>} />  
 <Route path="/domains" element={<Domain/>} />  
 <Route path="/about" element={<About/>} />  
 <Route path="/contact" element={<Contact/>} />  
      </Routes> 


   <Footer/>   

    </>
  );
}

export default App;
