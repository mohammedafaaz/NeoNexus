import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { PDFProvider } from './context/PDFContext';
import DevelopersSection from './components/DevelopersSection';

// Create a client for React Query
const queryClient = new QueryClient();

export function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    // Load fonts
    const orbitron = document.createElement('link');
    orbitron.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap';
    orbitron.rel = 'stylesheet';
    
    const exo = document.createElement('link');
    exo.href = 'https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap';
    exo.rel = 'stylesheet';
    
    document.head.appendChild(orbitron);
    document.head.appendChild(exo);
    
    // Set fonts as loaded
    const timer = setTimeout(() => setFontsLoaded(true), 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  if (!fontsLoaded) {
    return (
      <div className="fixed inset-0 bg-[#0F0F1A] flex size-full flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="relative flex items-center justify-center w-16 h-16 bg-[#0F0F1A] border border-[#8B5CF6] rounded-full">
          <div className="absolute h-16 w-16 rounded-full animate-spin bg-gradient-to-b from-[#8B5CF6] to-transparent"></div>
          <div className="absolute flex items-center justify-center bg-[#0F0F1A] rounded-full h-[62px] w-[62px]">
            <div className="text-[#8B5CF6] text-xl font-bold">NN</div>
          </div>
        </div>
        <div className="text-[#8B5CF6] font-medium">Loading NeoNexus...</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PDFProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/developers" element={<DevelopersSection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </PDFProvider>
    </QueryClientProvider>
  );
}

export default App;
