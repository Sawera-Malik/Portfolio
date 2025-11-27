import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({ name, level, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-slate-400 text-sm">{level}%</span>
    </div>
    <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
        <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
        />
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-cyan-400">Proficiency</span></h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        My frontend skillset is built on modern foundations. I specialize in the React ecosystem, but I explore the full spectrum of frontend technologies, from UI engineering to 3D interactive experiences.                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                            <h3 className="text-purple-400 font-bold text-xl mb-1">2+</h3>
                            <p className="text-slate-400 text-sm">Years Experience</p>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                            <h3 className="text-cyan-400 font-bold text-xl mb-1">30+</h3>
                            <p className="text-slate-400 text-sm">Projects Completed</p>
                        </div>
                    </div>
                </motion.div>

                <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Core Skills</h3>
                    <div className="space-y-2">
                        {SKILLS.map((skill, index) => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;
