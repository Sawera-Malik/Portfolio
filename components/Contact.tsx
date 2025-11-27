import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ContactFormState, FormStatus } from '../types';

const EMAILJS_SERVICE_ID = "service_9shfk7q";   
const EMAILJS_TEMPLATE_ID = "template_uylti4s"; 
const EMAILJS_PUBLIC_KEY = "xHfEjaUG37P21sCR6";   

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({ 
    name: '', 
    email: '', 
    message: '' 
  });
  
  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({ submitting: true, success: false, error: null });

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_name: "Sawera",
        reply_to: formState.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ submitting: false, success: true, error: null });
      setFormState({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error: any) {
      console.error("Email submission error:", error);
      const errorMessage = error?.text || "Failed to send message. Please try again later.";
      
      setStatus({ 
        submitting: false, 
        success: false, 
        error: errorMessage
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Touch</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <div className="p-4 bg-purple-500/20 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                        <Mail size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-1">Email Me</h3>
                        <a href="mailto:saweram693@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors">saweram693@gmail.com</a>
                    </div>
                </div>
                
                <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="p-4 bg-cyan-500/20 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        <Phone size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-1">Call Me</h3>
                        <a href="tel:+923201778498" className="text-slate-400 hover:text-cyan-400 transition-colors">+92 320 1778498</a>
                    </div>
                </div>

                <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300">
                    <div className="p-4 bg-pink-500/20 rounded-xl text-pink-400 group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-1">Location</h3>
                        <p className="text-slate-400">Bahawalpur, Pakistan</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-900/80 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
                {status.success && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-sm rounded-3xl animate-in fade-in duration-300">
                        <CheckCircle size={64} className="text-green-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-slate-400 text-center max-w-xs">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                        <button 
                            onClick={() => setStatus(prev => ({ ...prev, success: false }))}
                            className="mt-6 px-6 py-2 bg-slate-800 rounded-lg text-white hover:bg-slate-700 transition-colors"
                        >
                            Send Another
                        </button>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            disabled={status.submitting}
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-slate-600 disabled:opacity-50"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            disabled={status.submitting}
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-slate-600 disabled:opacity-50"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            disabled={status.submitting}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-slate-600 disabled:opacity-50 resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    
                    {status.error && (
                        <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                            <XCircle size={16} />
                            {status.error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status.submitting}
                        className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-purple-900/20"
                    >
                        {status.submitting ? (
                            <>
                                <Loader2 size={20} className="animate-spin" /> Sending...
                            </>
                        ) : (
                            <>
                                Send Message <Send size={20} />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;