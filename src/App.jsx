import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CityDetail from './pages/CityDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-paper font-japanese">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city/:cityName" element={<CityDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
