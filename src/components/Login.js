import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./FormStyles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const validationErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!email) validationErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      validationErrors.email = "Invalid email format";

    if (!password) validationErrors.password = "Password is required";

    return validationErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      handleSubmit();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://acetickets.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      setLoginError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      id="form"
      className="login-wrapper d-flex justify-content-center align-items-center"
    >
      <motion.div
        className="login-box p-4 rounded shadow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-center text-white mb-4">Login to Ace-Tickets</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label text-white small">
          
            </label>
            <div className="input-icon-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                id="email"
                className={`form-control form-control-sm ${
                  errors.email ? "invalid-field" : "valid-field"
                }`}
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {errors.email && (
              <small className="error-message text-danger">
                {errors.email}
              </small>
            )}
          </div>
            
            <div className  ="form-group mb-3">
            <label htmlFor="password" className="form-label text-white small"id="pass">
            </label>
            <div className="input-icon-wrapper">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type="password"
                id="password"
                className={`form-control form-control-sm ${
                  errors.password ? "invalid-field" : "valid-field"
                }`}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errors.password && (
              <small className="error-message text-danger">
                {errors.password}
              </small>
            )}
          </div>

          {loginError && (
            <div className="alert alert-danger small">{loginError}</div>
          )}

          <button
            type="submit"
            className="btn w-100 mt-2 btn-sm"
            style={{
              background:
                "linear-gradient(135deg, #0083a8, rgb(114, 126, 129))",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            Login
          </button>

          <div className="text-center mt-2">
            <a
              href="/forgot-password"
              className="forgot-password-link small text-white text-decoration-none"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios
// import './FormStyles.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loginError, setLoginError] = useState(''); // For handling login errors
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const validationErrors = {};
//     const emailRegex = /\S+@\S+\.\S+/;

//     if (!email) {
//       validationErrors.email = 'Email is required';
//     } else if (!emailRegex.test(email)) {
//       validationErrors.email = 'Invalid email format';
//     }

//     if (!password) {
//       validationErrors.password = 'Password is required';
//     }

//     return validationErrors;
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length === 0) {
//       console.log('Logging in with:', email, password);
//       handleSubmit(); // Trigger handleSubmit when form is valid
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('https://acetickets.vercel.app/api/auth/login', {
//         email,
//         password
//       });

//       // Store the token (you can use localStorage or context)
//       localStorage.setItem('token', response.data.token);
//       console.log('Login successful, token:', response.data.token);

//       // Navigate to home page after successful login
//       navigate('/');
//     } catch (error) {
//       setLoginError(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             id="email" // Added id for accessibility
//             className={`form-control ${errors.email ? 'invalid-field' : 'valid-field'}`}
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             aria-invalid={errors.email ? "true" : "false"} // Accessibility
//             aria-describedby={errors.email ? "email-error" : undefined}
//             required
//           />
//           {errors.email && <small id="email-error" className="error-message">{errors.email}</small>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password" // Added id for accessibility
//             className={`form-control ${errors.password ? 'invalid-field' : 'valid-field'}`}
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             aria-invalid={errors.password ? "true" : "false"} // Accessibility
//             aria-describedby={errors.password ? "password-error" : undefined}
//             required
//           />
//           {errors.password && <small id="password-error" className="error-message">{errors.password}</small>}
//         </div>
//         {loginError && <div className="alert alert-danger">{loginError}</div>} {/* Display login error */}
//         <button type="submit" className="btn btn-primary btn-block">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
