import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Course, Home, Login, Register, Sandboxing } from './page/import ';
import ContactUs from './page/ContactUs/ContactUs';
import { Footer, FooterCopyRight, Navbar } from './components/import';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sandboxing" element={<Sandboxing />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
        <FooterCopyRight />
      </div>
    </Router>
  );
}

export default App;
