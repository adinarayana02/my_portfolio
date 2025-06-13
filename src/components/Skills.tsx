import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 85, category: 'Languages', icon: '🐍' },
    { name: 'Java', level: 80, category: 'Languages', icon: '☕' },
    { name: 'JavaScript', level: 70, category: 'Languages', icon: '📜' },
    { name: 'LLMs', level: 85, category: 'AI/ML', icon: '🤖' },
    { name: 'Transformers', level: 83, category: 'AI/ML', icon: '⚡' },
    { name: 'GenAI', level: 84, category: 'AI/ML', icon: '🧠' },
    { name: 'React.js', level: 80, category: 'Web Development', icon: '⚛️' },
    { name: 'Django', level: 80, category: 'Web Development', icon: '🐍' },
    { name: 'FastAPI', level: 80, category: 'Web Development', icon: '🚀' },
    { name: 'SQL', level: 80, category: 'Database', icon: '🗄️' },
    { name: 'Git', level: 75, category: 'DevOps', icon: '📦' },
    { name: 'AWS', level: 75, category: 'Cloud', icon: '☁️' },
  ];

  const categories = ['All', 'Languages', 'AI/ML', 'Web Development', 'Database', 'DevOps', 'Cloud'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Duplicate skills for continuous scrolling
  const duplicatedSkills = [...filteredSkills, ...filteredSkills];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-emerald-950/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-purple-900/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/10 to-purple-500/10 blur-3xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-emerald-300 mb-6"
            whileInView={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Mastering cutting-edge technologies to build innovative solutions
          </motion.p>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-purple-500 to-emerald-400 mx-auto mt-8 rounded-full opacity-60"></div>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/50 text-gray-300 border-slate-700 hover:text-emerald-300 hover:border-emerald-500/30 hover:bg-slate-700/50'
              }`}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory === category && (
                <motion.div
                  layoutId="categoryIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)",
              }}
              onClick={() => handleSkillClick(skill.name)}
              animate={{
                y: selectedSkill === skill.name ? -20 : 0,
                scale: selectedSkill === skill.name ? 1.05 : 1,
                boxShadow: selectedSkill === skill.name 
                  ? "0 30px 60px rgba(16, 185, 129, 0.3)"
                  : "0 25px 50px rgba(16, 185, 129, 0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className={`group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 overflow-hidden cursor-pointer ${
                selectedSkill === skill.name
                  ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/25'
                  : 'border-slate-700/50 hover:border-emerald-500/30'
              }`}
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 transition-opacity duration-500 ${
                selectedSkill === skill.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
              
              {/* Skill Header */}
              <div className="relative z-10 flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                    selectedSkill === skill.name ? 'text-emerald-300' : 'text-white group-hover:text-emerald-300'
                  }`}>
                    {skill.name}
                  </h3>
                </div>
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative mb-6">
                <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="relative z-10">
                <motion.span 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.category}
                </motion.span>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-purple-500/10 rounded-full blur-xl transition-opacity duration-500 ${
                selectedSkill === skill.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
              <div className={`absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-emerald-500/10 rounded-full blur-xl transition-opacity duration-500 ${
                selectedSkill === skill.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
