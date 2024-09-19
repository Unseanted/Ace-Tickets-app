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
      handleSubmit(e); // Trigger handleSubmit for registration process
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          <label>Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'invalid-field' : 'valid-field'}`}
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <small className="error-message">{errors.name}</small>}
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'invalid-field' : 'valid-field'}`}
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <small className="error-message">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'invalid-field' : 'valid-field'}`}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <small className="error-message">{errors.password}</small>}
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
