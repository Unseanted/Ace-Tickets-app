import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FormStyles.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [signUpError, setSignUpError] = useState(''); // State for signup errors
  const navigate = useNavigate();

  const validateForm = () => {
    const validationErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!name) {
      validationErrors.name = 'Name is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    return validationErrors;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      handleSubmit(); // Trigger handleSubmit for registration process
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://acetickets.vercel.app/api/auth/register', {
        name,
        email,
        password,
      });

      console.log('Registration successful, token:', response.data.token);

      // Optionally store the token (if required) and redirect after successful registration
      navigate('/login');
    } catch (error) {
      setSignUpError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            className={`form-control ${errors.name ? 'invalid-field' : 'valid-field'}`}
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && <small id="name-error" className="error-message">{errors.name}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email" 
            className={`form-control ${errors.email ? 'invalid-field' : 'valid-field'}`}
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? "true" : "false"} 
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && <small id="email-error" className="error-message">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password ? 'invalid-field' : 'valid-field'}`}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby={errors.password ? "password-error" : undefined}
            required
          />
          {errors.password && <small id="password-error" className="error-message">{errors.password}</small>}
        </div>
        {signUpError && <div className="alert alert-danger">{signUpError}</div>} {/* Display error only */}
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
