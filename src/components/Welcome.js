import React from 'react';
import { motion } from 'framer-motion';
import moviesImage from './movies1.png';
import sportsImage from './sports.png';
import eventsImage from './event1.png';
import './SharedStyles.css';

const CategoryCard = ({ image, title, alt, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center"
  >
    <motion.div 
      className="category-card p-4"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.img
        src={image}
        alt={alt}
        title={`Book ${title.toLowerCase()} tickets`}
        className="w-40 h-40 md:w-48 md:h-48 object-contain"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
    <motion.p 
      className="mt-3 text-white font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay + 0.2 }}
    >
      {title}
    </motion.p>
  </motion.div>
);

const Welcome = () => {
  return (
    <div className="gradient-background flex items-center justify-center p-4">
      <motion.div 
        className="glass-container max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome to Ace-Tickets
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Your one-stop solution for booking tickets for movies, football matches, and events.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CategoryCard
              image={moviesImage}
              title="Movies"
              alt="Movies"
              delay={0.4}
            />
            
            <CategoryCard
              image={sportsImage}
              title="Sports"
              alt="Football"
              delay={0.6}
            />
            
            <CategoryCard
              image={eventsImage}
              title="Events"
              alt="Events"
              delay={0.8}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;