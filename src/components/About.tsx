import React from 'react';
import { motion } from 'framer-motion';
import { User, Download, Star, Award, Code, Brain, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent mb-4"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Enhanced Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-purple-500 to-emerald-400 p-1">
                <div className="w-full h-full rounded-2xl md:rounded-3xl bg-slate-900 flex items-center justify-center relative overflow-hidden">
                  <img src="https://avatars.githubusercontent.com/u/97646075?v=4" alt="Profile" className="text-gray-400 z-10" style={{ width: '100%', height: '100%' }} />
                  
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-2xl border border-emerald-400/30"
            >
              <Brain className="text-white w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-2xl border border-purple-400/30"
            >
              <Code className="text-white w-6 h-6 md:w-7 md:h-7" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -10, 0],
                x: [0, 5, 0] 
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute top-1/2 -left-6 md:-left-8 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl md:rounded-2xl p-2 md:p-3 shadow-2xl"
            >
              <Zap className="text-white w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              AI/ML & Full Stack Developer
            </motion.h3>
            
            <div className="space-y-4 md:space-y-6">
              <motion.p 
                className="text-gray-300 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a passionate AI/ML & Full Stack Developer with expertise in building 
                intelligent systems and scalable applications. Currently pursuing B.Tech in Information 
                Technology at Vasireddy Venkatadri Institute of Technology with a CGPA of 8.0/10.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With hands-on experience as an AI/ML Intern at Telic Info Services and Software 
                Development Engineer Intern at Afrov Private Limited, I've worked on cutting-edge 
                projects involving AI recruitment systems, fraud detection, and intelligent chatbots.
              </motion.p>
            </div>

            {/* Enhanced Achievements */}
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
              {[
                { icon: Award, text: "Student Ambassador, Entrepreneur Council", color: "from-emerald-500 to-emerald-600" },
                { icon: Target, text: "GeeksforGeeks 100 Days of Code Challenge", color: "from-purple-500 to-purple-600" }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className={`p-2 md:p-3 bg-gradient-to-r ${achievement.color} rounded-lg md:rounded-xl shadow-lg`}>
                    <achievement.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base font-medium">{achievement.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              {[
                { number: '5+', label: 'Projects Completed', color: 'from-emerald-400 to-emerald-500' },
                { number: '8.0', label: 'CGPA', color: 'from-purple-400 to-purple-500' },
                { number: 'freshman', label: 'Years Experience', color: 'from-emerald-400 to-purple-500' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 md:p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm font-medium relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Resume Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)",
                y: -5 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1cdVEjbnW04fuk4XpvDi8Hunmg3F-Tdsd/view?usp=sharing', '_blank')}
              viewport={{ once: true }}
              className="group flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-purple-500 text-white rounded-xl md:rounded-2xl font-semibold shadow-xl relative overflow-hidden text-sm md:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
