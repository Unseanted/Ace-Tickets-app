import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./FormStyles.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const { name, email, password } = formData;
    const validationErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!name.trim()) validationErrors.name = "Name is required";
    if (!email) validationErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      validationErrors.email = "Invalid email format";
    if (!password) validationErrors.password = "Password is required";
    else if (password.length < 6)
      validationErrors.password = "Password must be at least 6 characters";

    return validationErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://acetickets.vercel.app/api/auth/register",
          formData
        );
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } catch (error) {
        setSignupError(error.response?.data?.message || "Signup failed");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      id="form"
      className="login-wrapper d-flex justify-content-center align-items-center"
    >
      <motion.div
        className="login-box p-4 rounded shadow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-center text-white mb-4">Create an Account</h3>
        <form onSubmit={handleSignup}>
          <div className="form-group mb-3 input-icon-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              id="name"
              className={`form-control form-control-sm ${
                errors.name ? "invalid-field" : ""
              }`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>{" "}
          <div className="form-group mb-3 input-icon-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control form-control-sm ${
                errors.email ? "invalid-field" : ""
              }`}
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>{" "}
        
          <div className="form-group mb-3 input-icon-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              id="password"
              className={`form-control form-control-sm ${
                errors.password ? "invalid-field" : ""
              }`}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>{" "}
        
          {signupError && (
            <div className="alert alert-danger small">{signupError}</div>
          )}
          <button
            type="submit"
            className="btn w-100 mt-2 btn-sm"
            style={{
              background: "linear-gradient(135deg, #0083a8,rgb(114, 126, 129))",
              color: "#fff",
              width: "3cm",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
            }}
          >
            SignUp
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './FormStyles.css';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [signUpError, setSignUpError] = useState(''); // State for signup errors
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const validationErrors = {};
//     const emailRegex = /\S+@\S+\.\S+/;

//     if (!name) {
//       validationErrors.name = 'Name is required';
//     }

//     if (!email) {
//       validationErrors.email = 'Email is required';
//     } else if (!emailRegex.test(email)) {
//       validationErrors.email = 'Invalid email format';
//     }

//     if (!password) {
//       validationErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       validationErrors.password = 'Password must be at least 6 characters';
//     }

//     return validationErrors;
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length === 0) {
//       handleSubmit(); // Trigger handleSubmit for registration process
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('https://acetickets.vercel.app/api/auth/register', {
//         name,
//         email,
//         password,
//       });

//       console.log('Registration successful, token:', response.data.token);

//       // Optionally store the token (if required) and redirect after successful registration
//       navigate('/login');
//     } catch (error) {
//       setSignUpError(error.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="container mt-5 mx-auto d-block">
//       <h2 className=''>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             className={`form-control ${
//               errors.name ? "invalid-field" : "valid-field"
//             }`}
//             placeholder="Enter full name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             aria-invalid={errors.name ? "true" : "false"}
//             aria-describedby={errors.name ? "name-error" : undefined}
//             required
//           />
//           {errors.name && (
//             <small id="name-error" className="error-message">
//               {errors.name}
//             </small>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             id="email"
//             className={`form-control ${
//               errors.email ? "invalid-field" : "valid-field"
//             }`}
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             aria-invalid={errors.email ? "true" : "false"}
//             aria-describedby={errors.email ? "email-error" : undefined}
//             required
//           />
//           {errors.email && (
//             <small id="email-error" className="error-message">
//               {errors.email}
//             </small>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             className={`form-control ${
//               errors.password ? "invalid-field" : "valid-field"
//             }`}
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             aria-invalid={errors.password ? "true" : "false"}
//             aria-describedby={errors.password ? "password-error" : undefined}
//             required
//           />
//           {errors.password && (
//             <small id="password-error" className="error-message">
//               {errors.password}
//             </small>
//           )}
//         </div>
//         {signUpError && <div className="alert alert-danger">{signUpError}</div>}{" "}
//         {/* Display error only */}
//         <button
//           type="submit"
//           className="btn btn-primary btn-block mx-auto d-block mt-4"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
