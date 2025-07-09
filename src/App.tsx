import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedReviews from './components/FeaturedReviews';
import TrustSection from './components/TrustSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import EnhancedAdminDashboard from './components/EnhancedAdminDashboard'; // Import baru
import { usePWA } from './hooks/usePWA';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <Categories />
      <FeaturedReviews />
      <TrustSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const { registerServiceWorker } = usePWA();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    registerServiceWorker();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-purple-700 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-2">Wirecutter Indonesia</h1>
            <p className="text-red-100">Loading AI-powered recommendations...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<EnhancedAdminDashboard />} /> {/* Route baru */}
      </Routes>
    </Router>
  );
};

export default App;

