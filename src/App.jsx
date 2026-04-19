import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyBar from './components/StickyBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
// ServiceAreas and BookService have been merged into main pages and removed from primary routes
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              {/* Removed standalone service-areas and book-service routes; functionality merged into About and Contact pages */}
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <StickyBar />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
