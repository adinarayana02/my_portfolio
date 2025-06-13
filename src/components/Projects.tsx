import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Bot, Shield, Image, CloudSun } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Kama.ai – AI-Powered Recruitment Platform',
      description: 'Built a full-stack AI recruitment system using Python, FastAPI, and GPT APIs to automate dynamic interview question generation from resumes and job descriptions. Integrated Whisper for real-time voice transcription and ChromaDB with LangChain for advanced candidate evaluation.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMo25EGlEfBnfV2f0mVMJU8gnREbZfRi5EcA&s',
      tags: ['Python', 'FastAPI', 'GPT APIs', 'Whisper', 'LangChain', 'ChromaDB', 'React.js', 'Docker', 'REST API'],
      github: 'https://github.com/adinarayana02/kama.ai_ai_Recruitment',
      live: 'https://kama-ai-ai-recruitment.vercel.app/',
      featured: true,
      icon: Bot,
      achievements: [
        'Automated candidate screening, reducing manual effort by 40%',
        'Achieved 92% transcription accuracy with Whisper',
        'Reduced system setup time by 50% using Docker'
      ]
    },
    {
      title: 'Weather App – AI Full Stack Application',
      description: 'Developed a fullstack weather dashboard using React.js, Node.js, and OpenWeatherMap API with AI-powered weather summaries. Integrated dynamic charts and real-time analysis for temperature, wind, and humidity across global cities.',
      image: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=600&h=400&fit=crop',
      tags: ['React.js', 'Node.js', 'OpenWeatherMap API', 'Express.js', 'Framer Motion', 'AI Summary'],
      github: 'https://github.com/adinarayana02/weather_app/tree/main',
      live: 'https://weatherapp-ruddy-ten.vercel.app/',
      featured: true,
      icon: CloudSun,
      achievements: [
        'Live weather data with global city search',
        'AI-generated contextual summaries for users',
        'Dynamic dashboard with animated charts and metrics'
      ]
    },
    {
      title: 'ResortBot – Voice-Enabled Resort Chatbot',
      description: 'Engineered a voice chatbot using Python, FastAPI, and OpenAI GPT-3.5, providing 90% accuracy in answering resort queries. Incorporated Whisper for real-time speech-to-text with 92% accuracy and employed ChromaDB for better document retrieval.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tags: ['Python', 'FastAPI', 'OpenAI GPT-3.5', 'Whisper', 'ChromaDB', 'React.js', 'Docker'],
      github: '#',
      live: '#',
      featured: true,
      icon: Bot,
      achievements: [
        '90% accuracy in answering resort queries',
        '92% accuracy in speech-to-text',
        '40% improvement in user interaction time'
      ]
    },
    {
      title: 'NeoDetect – AI Fraud Detection System',
      description: 'Created an AI-based fraud detection system using DenseNet121 and fine-tuned model with TensorFlow, and Llama2 for accurate image and document analysis, increasing fraud detection by 30%.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      tags: ['DenseNet121', 'TensorFlow', 'Llama2', 'RAG', 'FastAPI', 'Docker'],
      github: '#',
      live: '#',
      featured: true,
      icon: Shield,
      achievements: [
        '30% increase in fraud detection',
        '25% improvement in accuracy',
        '20% reduction in claim processing time'
      ]
    },
    
    {
      title: 'Deep Learning Image Classifier',
      description: 'Designed a CNN-based image classifier using TensorFlow, Keras, and ResNet50 to detect deepfakes with up to 95% accuracy. Implemented a Flask-based web app for real-time predictions.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tags: ['TensorFlow', 'Keras', 'ResNet50', 'CNN', 'Flask', 'Docker'],
      github: '#',
      live: '#',
      featured: false,
      icon: Image,
      achievements: [
        '95% accuracy in deepfake detection',
        '60% reduction in manual validation time',
        '70% improvement in accessibility'
      ]
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
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
            Featured Projects
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto rounded-full"></div>
          <motion.p 
            className="text-gray-300 mt-6 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore my recent projects showcasing AI/ML, full-stack development, and innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Icon */}
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-slate-900/80 rounded-full">
                    <project.icon className="text-emerald-400" size={20} />
                  </div>
                </div>

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-900/80 rounded-full text-white hover:bg-emerald-500 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-900/80 rounded-full text-white hover:bg-purple-500 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                
                {/* Achievements */}
                {project.achievements && (
                  <div className="mb-3 md:mb-4">
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-xs md:text-sm flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs md:text-sm rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs md:text-sm rounded-full">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors duration-300 text-sm md:text-base"
                  >
                    <Code size={14} className="md:w-4 md:h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-emerald-500 to-purple-500 text-white rounded-xl hover:from-emerald-600 hover:to-purple-600 transition-all duration-300 text-sm md:text-base"
                  >
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-emerald-500 to-purple-500 text-white rounded-xl md:rounded-2xl font-semibold hover:from-emerald-600 hover:to-purple-600 transition-all duration-300 text-sm md:text-base"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
