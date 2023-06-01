import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import CertificatesPage from './pages/CertificatesPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <div className="App">

      <Routes>
          {/* public routes */}
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/AboutUs" element={<AboutUsPage/>}></Route>
          <Route path="/Products" element={<ProductsPage/>}></Route>
          <Route path="/Certificates" element={<CertificatesPage/>}></Route>
          <Route path="/Gallery" element={<GalleryPage/>}></Route>
          <Route path="/Contact" element={<ContactPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
