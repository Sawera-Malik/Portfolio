import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
                <span className="text-purple-300 text-sm font-semibold tracking-wider uppercase">FrontEnd Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
                Designing the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                    Digital Future
                </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                Building the Interactive Web I architect pixel-perfect, performance-optimized UIs using React, Next.js, and modern APIs. Turning innovative designs into accessible, smooth digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
                <a href="#projects" className="group px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2">
                    View Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                    Contact Me
                </a>
            </div>

            <div className="mt-12 flex gap-6 text-slate-400">
                <a href="https://github.com/Sawera-Malik" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                    <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sawera-malik-314004356/" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                    <Linkedin size={24} />
                </a>
                <a href="https://x.com/saweram693" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                    <Twitter size={24} />
                </a>
            </div>
        </motion.div>

        {/* The right side is intentionally left empty to allow the 3D scene to shine through, 
            but on mobile, the 3D element is centered so text overlays.
            The CSS grid handles the layout. */}
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
