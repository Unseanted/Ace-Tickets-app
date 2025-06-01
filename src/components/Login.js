import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import './SharedStyles.css';

const API_URL = process.env.REACT_APP_API_URL || 'https://acetickets.vercel.app';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const validationErrors = {};
    // More comprehensive email regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    return validationErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      handleSubmit();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password
      });

      if (response.data.token) {
        // Store the token securely
        localStorage.setItem('token', response.data.token);
        // Set authorization header for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        navigate('/');
      } else {
        setLoginError('Invalid response from server');
      }
    } catch (error) {
      if (!error.response) {
        setLoginError('Network error. Please check your internet connection.');
      } else if (error.response.status === 401) {
        setLoginError('Invalid email or password');
      } else if (error.response.status === 429) {
        setLoginError('Too many login attempts. Please try again later.');
      } else {
        setLoginError(error.response?.data?.message || 'An unexpected error occurred');
      }
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="gradient-background flex items-center justify-center p-4">
      <motion.div 
        className="glass-container w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-3xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Login to Ace-Tickets
        </motion.h2>
        <form onSubmit={handleLogin} noValidate>
          <motion.div 
            className="form-group mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label htmlFor="email" className="block mb-2">Email address</label>
            <input
              type="email"
              id="email"
              className={`form-control w-full p-3 rounded-lg ${errors.email ? 'border-red-400' : ''}`}
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: '' }));
              }}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              disabled={isLoading}
              required
            />
            {errors.email && (
              <motion.small 
                id="email-error" 
                className="error-message block mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.email}
              </motion.small>
            )}
          </motion.div>
          <motion.div 
            className="form-group mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              className={`form-control w-full p-3 rounded-lg ${errors.password ? 'border-red-400' : ''}`}
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: '' }));
              }}
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={errors.password ? "password-error" : undefined}
              disabled={isLoading}
              required
            />
            {errors.password && (
              <motion.small 
                id="password-error" 
                className="error-message block mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.password}
              </motion.small>
            )}
          </motion.div>
          {loginError && (
            <motion.div 
              className="alert alert-danger p-3 rounded-lg mb-4"
              role="alert"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {loginError}
            </motion.div>
          )}
          <motion.button 
            type="submit" 
            className="btn-primary w-full p-3 rounded-lg font-medium"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {isLoading ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Logging in...
              </motion.span>
            ) : (
              'Login'
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;