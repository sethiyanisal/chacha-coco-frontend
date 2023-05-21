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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          
          {/* public routes */}
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/AboutUs" element={<AboutUsPage/>}></Route>
          <Route path="/Products" element={<ProductsPage/>}></Route>
          <Route path="/Contact" element={<ContactPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
