
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'Telic Info Services Private Limited',
      period: 'July 2024 – Nov 2024',
      location: 'Remote, India',
      description: 'Engineered an AI recruitment system using Python (FastAPI) and GPT APIs, automated interview question generation based on resumes and job descriptions, reducing manual screening time by 40%. Added OpenAI Whisper for real-time voice transcription with 92% precision and used Langchain, LLMs and ChromaDB for boost candidate evaluation.',
      achievements: [
        'Reduced manual screening time by 40%',
        '92% precision in voice transcription',
        '50% reduction in setup time with Docker deployment'
      ],
      technologies: ['Python', 'FastAPI', 'GPT APIs', 'OpenAI Whisper', 'Langchain', 'ChromaDB', 'React.js', 'Docker'],
      type: 'Internship',
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'Afrov Private Limited',
      period: 'Feb 2024 – June 2024',
      location: 'Remote, India',
      description: 'Created NeoDetect, an AI-based fraud detection system using DenseNet121 and fine-tuned model with TensorFlow, and Llama2 for accurate image and document analysis, increasing fraud detection by 30%. Applied RAG to analyze insurance documents, improving fraud detection accuracy by 25% resulting in a 20% reduction in claim processing time.',
      achievements: [
        'Increased fraud detection by 30%',
        '25% improvement in fraud detection accuracy',
        '20% reduction in claim processing time',
        '60% faster API response times'
      ],
      technologies: ['DenseNet121', 'TensorFlow', 'Llama2', 'RAG', 'FastAPI', 'Docker', 'ML Models'],
      type: 'Internship',
    },
    {
      title: 'B.Tech in Information Technology',
      company: 'Vasireddy Venkatadri Institute of Technology',
      period: '2020 - 2024',
      location: 'India',
      description: 'Pursuing Bachelor of Technology in Information Technology with a CGPA of 8.0/10. Coursework includes SDLC, DBMS, Operating Systems, Computer Networks, OOPS, SOLID Principles, and Design Patterns.',
      achievements: [
        'CGPA: 8.0/10',
        'Student Ambassador, Entrepreneur Council',
        'GeeksforGeeks 100 Days of Code Challenge'
      ],
      technologies: ['SDLC', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOPS', 'Design Patterns'],
      type: 'Education',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-blue-600 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 to-blue-600 rounded-full transform md:-translate-x-2 z-10 shadow-lg"></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 shadow-xl">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {exp.type === 'Education' ? (
                        <GraduationCap className="text-amber-400" size={24} />
                      ) : (
                        <Briefcase className="text-blue-400" size={24} />
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-amber-400 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      exp.type === 'Education' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-amber-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
