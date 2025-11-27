import React, { Suspense } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Note: To run this project, you need to install the following dependencies:
// npm install three @types/three @react-three/fiber @react-three/drei framer-motion lucide-react

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* 3D Background Layer */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-900 z-0" />}>
        <ThreeBackground />
      </Suspense>

      {/* Content Overlay Layer */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="backdrop-blur-sm bg-slate-900/30">
            <Projects />
          </div>
          
          <Skills />
          
          <div className="backdrop-blur-sm bg-slate-900/30">
            <Contact />
          </div>
        </main>

        <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900/80 backdrop-blur-md">
          <p>© {new Date().getFullYear()} Sawera Portfolio. Built with React & Three.js.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
