import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const YouTubeVideos = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const videos = [
    {
      title: "Build a 24/7 AI Voice Assistant for Real Estate Using Retell AI + N8N",
      description: "In this video, I'll walk you through how to build a 24/7 AI voice agent for real estate using Retell AI and N8N — a powerful setup designed to automate every step of real estate lead handling.",
      date: "May 21, 2025",
      link: "https://youtu.be/qzsi11Jeakk",
      thumbnail: "https://media.licdn.com/dms/image/v2/D5622AQH2Z97HncyaYQ/feedshare-shrink_800/B56Zbysi8RGoAk-/0/1747828487765?e=1752710400&v=beta&t=N8virMyJq1bjsiD6iZZ71n9ahZxO-j-1-G5bms-aSno",
      views: "1.2K",
      tags: ["AI", "Retell AI", "N8N", "Real Estate"]
    },
    {
        title: "Build a Personal Assistant AI Agent in n8n (step by step, no-code ,Telegram)",
        description: "In this video, I'll walk you through how to build your own personal assistant AI agent in n8n (step by step, no-code ,Telegram). This project will help you automate your personal assistant processes using AI.",
        date: "May 10, 2025",
        link: "https://youtu.be/JM7L7XsXBSk",
        thumbnail: "https://media.licdn.com/dms/image/sync/v2/D5627AQGNXi2hVZD_7A/articleshare-shrink_160/B56ZarAwhWHUAk-/0/1746673861356?e=1750381200&v=beta&t=uryyLRaYYFjSvNhgEZ3mf_LqnjEod-V4qsl-j3shNa4", 
          views: "1.2K",
          tags: ["n8n", "AI", "Telegram"]
      },
    {
      title: "Build own AI Marketing Asset Generator (n8n , openai )",
      description: "In this video, I'll walk you through how to build your own AI marketing asset generator using n8n and OpenAI. This project will help you generate marketing assets like social media posts, blog posts, and more, all powered by AI.",
      date: "May 15, 2025",
      link: "https://youtu.be/957ZURCMkM0",
      thumbnail: "https://i9.ytimg.com/vi/957ZURCMkM0/mqdefault.jpg?v=6825bacb&sqp=CODmrcIG&rs=AOn4CLDzZ09BP1dD8XNi3Utu9Hx7-X817A",
      views: "2.5K",
      tags: ["LLMs", "n8n", "OpenAI", "AI"]
    },
    {
      title: "Build OWN WhatsApp AI Agent That Can Prompt Product , Sell And customer support",
      description: "In this video, I'll walk you through how to build your own WhatsApp AI agent that can prompt products, sell them, and provide customer support. This project will help you automate your sales and customer support processes using AI.",
      date: "May 10, 2025",
      link: "https://youtu.be/QgfCJbBa6mc",
      thumbnail: "https://media.licdn.com/dms/image/v2/D5622AQFNGov7jEsZBg/feedshare-shrink_800/B56Zat4KFuGkAg-/0/1746673902934?e=1752710400&v=beta&t=P8375X0eG7OsvQoRxVVo3BmbRF0r7NBLPRA8OZhY1JI",
        views: "3.1K",
        tags: ["Full Stack", "AI", "Web Development"]
    },

      {
        title: "Build a Personal Assistant AI Agent in n8n",
        description: "In this video, I'll walk you through how to build your own WhatsApp AI agent that can prompt products, sell them, and provide customer support. This project will help you automate your sales and customer support processes using AI.",
        date: "May 10, 2025",
        link: "https://youtu.be/cpJ2Ma5q33g",
        thumbnail: "https://i9.ytimg.com/vi/cpJ2Ma5q33g/mqdefault.jpg?sqp=CLjrrcIG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGQgZChkMA8=&rs=AOn4CLAEYlLB_3NTLqnRtvpn3_w32L5VNQ",
          views: "3.1K",
          tags: ["n8n", "AI", "Web Development"]
      },
  ];

  // Create a longer array for smoother looping
  const duplicatedVideos = [...videos, ...videos, ...videos];

  // Calculate the total width of one set of cards
  const cardWidth = 450; // max width of a card
  const gap = 32; // gap between cards
  const totalWidth = (cardWidth + gap) * videos.length;

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

  const handleVideoClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="videos" className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden relative">
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
            Latest Video Tutorials
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            Watch my latest video tutorials on AI/ML, Full Stack Development, and Technology
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
              {duplicatedVideos.map((video, index) => (
                <motion.article
                  key={`${video.title}-${index}`}
                  onClick={() => handleVideoClick(video.link)}
                  className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px] bg-slate-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-20 h-20 rounded-full bg-emerald-500/90 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-10 h-10 text-white" fill="white" />
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    className="p-5 md:p-7"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                      {video.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 md:px-4 py-1.5 text-sm md:text-base bg-emerald-400/10 text-emerald-400 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <motion.h3 
                      className="text-xl md:text-2xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300"
                      whileHover={{ scale: 1.01 }}
                    >
                      {video.title}
                    </motion.h3>
                    <motion.p 
                      className="text-base md:text-lg text-gray-400 mb-5 line-clamp-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {video.description}
                    </motion.p>
                    
                    <div className="flex items-center justify-between">
                      <motion.span 
                        className="text-sm md:text-base text-gray-500"
                        whileHover={{ scale: 1.05 }}
                      >
                        {video.date} • {video.views} views
                      </motion.span>
                      <motion.div
                        className="inline-flex items-center gap-2 text-base md:text-lg text-emerald-400 group-hover:text-emerald-300 transition-colors"
                        whileHover={{ 
                          scale: 1.05,
                          x: 3,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Watch Now
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink size={18} className="md:w-5 md:h-5" />
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
            href="https://www.youtube.com/@CloudMinds-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-emerald-500 to-purple-600 text-white rounded-lg md:rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            View All Videos
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

export default YouTubeVideos; 
