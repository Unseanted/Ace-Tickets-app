import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './FormStyles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(''); // For handling login errors
  const navigate = useNavigate();

  const validateForm = () => {
    const validationErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    return validationErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Logging in with:', email, password);
      handleSubmit(); // Trigger handleSubmit when form is valid
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://acetickets.vercel.app/api/auth/login', {
        email,
        password
      });

      // Store the token (you can use localStorage or context)
      localStorage.setItem('token', response.data.token);
      console.log('Login successful, token:', response.data.token);
      
      // Navigate to home page after successful login
      navigate('/');
    } catch (error) {
      setLoginError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email" // Added id for accessibility
            className={`form-control ${errors.email ? 'invalid-field' : 'valid-field'}`}
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? "true" : "false"} // Accessibility
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && <small id="email-error" className="error-message">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password" // Added id for accessibility
            className={`form-control ${errors.password ? 'invalid-field' : 'valid-field'}`}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? "true" : "false"} // Accessibility
            aria-describedby={errors.password ? "password-error" : undefined}
            required
          />
          {errors.password && <small id="password-error" className="error-message">{errors.password}</small>}
        </div>
        {loginError && <div className="alert alert-danger">{loginError}</div>} {/* Display login error */}
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
