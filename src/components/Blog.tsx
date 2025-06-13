import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Blog = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const blogPosts = [
    {
      title: "Designing LLM Systems",
      description: "This blog post delves into the intricacies of designing Large Language Model (LLM) systems, exploring the latest advancements and best practices in the field.",
      date: "March 15, 2024",
      link: "https://thotaadinarayana.substack.com/p/designing-llm-systems",
      image: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc84b6442-5e8c-4cdc-ba9a-52b10fba65e6_2760x1594.jpeg",
      tags: ["AI", "LLMs","GENAI"]
    },
    {
      title: "Fine-Tuning Your Own Language Model",
      description: "This blog post explores the process of fine-tuning a language model to tailor it to specific tasks or domains, providing insights into the techniques and considerations involved.",
      date: "February 28, 2024",
      link: "https://thotaadinarayana.substack.com/p/fine-tuning-your-own-language-model",
      image: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F54577c35-ea47-4f7b-9265-0bf26e7645f1_1116x600.png",
      tags: ["LLMs","GENAI","AI","Fine-Tuning"]
    },
    {
      title: "Role of Transformers in Generative AI",
      description: "This blog post explores the role of transformers in generative AI, providing insights into the techniques and considerations involved.",
      date: "February 10, 2024",
      link: "https://thotaadinarayana.substack.com/p/role-of-transformers-in-generative",
      image: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8f0a061c-e81b-45aa-8a3e-272cdd2b08d9_1580x1080.jpeg",
      tags: ["LLM", "GEN AI", "Transformers"]
    },
    {
      title: "Vector Databases: The Missing Link Between Your Data & Generative AI ",
      description: "This blog post explores the role of Vector Databases in generative AI, providing insights into the techniques and considerations involved..",
      date: "February 10, 2024",
      link: "https://thotaadinarayana.substack.com/p/vector-databases-the-missing-link",
      image: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b72f805-422c-42b6-9aab-a8c48c38dd85_936x470.png",
      tags: ["LLM", "GEN AI", "Transformers"]
    }
  ];

  // Create a longer array for smoother looping
  const duplicatedPosts = [...blogPosts, ...blogPosts, ...blogPosts];

  // Calculate the total width of one set of cards
  const cardWidth = 450; // max width of a card
  const gap = 32; // gap between cards
  const totalWidth = (cardWidth + gap) * blogPosts.length;

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

  return (
    <section id="blog" className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden relative">
      {/* Animated background elements - reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/10 to-purple-500/10 blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-8 md:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent mb-3 md:mb-4"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            Sharing my thoughts and experiences in AI/ML, Full Stack Development, and Technology
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{
                x: [0, -totalWidth],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPosts.map((post, index) => (
                <motion.article
                  key={`${post.title}-${index}`}
                  onClick={() => window.open(post.link, '_blank', 'noopener,noreferrer')}
                  className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px] bg-slate-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-emerald-500/20 backdrop-blur-sm rounded-full p-4">
                        <ExternalLink className="w-8 h-8 text-emerald-400" />
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    className="p-4 md:p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-2 md:px-3 py-1 text-xs md:text-sm bg-emerald-400/10 text-emerald-400 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <motion.h3 
                      className="text-xl md:text-2xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors"
                      whileHover={{ scale: 1.01 }}
                    >
                      {post.title}
                    </motion.h3>
                    <motion.p 
                      className="text-base md:text-lg text-gray-400 mb-4 line-clamp-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {post.description}
                    </motion.p>
                    <div className="flex items-center justify-between">
                      <motion.span 
                        className="text-sm md:text-base text-gray-500"
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.date}
                      </motion.span>
                      <motion.div
                        className="inline-flex items-center gap-2 text-base md:text-lg text-emerald-400 group-hover:text-emerald-300 transition-colors"
                        whileHover={{ 
                          scale: 1.05,
                          x: 3,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink size={16} className="md:w-5 md:h-5" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.a
            href="https://medium.com/@thotaadinarayana02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-lg md:rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            View All Posts
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink size={16} className="md:w-5 md:h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 