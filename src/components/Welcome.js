import React from 'react';
import { motion } from 'framer-motion';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Welcome to Ace-Tickets</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Your one-stop solution for booking tickets for movies, football matches, and events.</p>
        </motion.div>
        <div className="welcome-images">
          <motion.img
            src="./movies1.png"
            alt="Movies"
            className="welcome-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            src="./sports.png"
            alt="Football"
            className="welcome-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.img
            src="./event1.png"
            alt="Events"
            className="welcome-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
