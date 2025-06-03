import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Asset/Logo.png";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm px-3 w-100"
      style={{
        backgroundColor: "#006FA1",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 text-white"
          to="/"
        >
          <img
            src={Logo}
            alt="logo"
            height="60"
            style={{ borderRadius: "50%" }}
          />
          <span className="fw-bold d-none d-md-inline">Ace-Tickets</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/football">
                Football
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/movies">
                Movies
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light ms-2" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../Asset/Logo.png';

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top navbar-expand-xl|lg|md|sm">
//       <Link classNamea="navbar-brand" to="/"></Link>
//       <div id='goat' className="">
//          <img src={Logo} alt='logo'
//          height={100}
//          style={{ borderRadius:'50%'}}
//         />
//         <ul className="navbar-nav mr-auto ">
//           <li className="nav-item ">
//             <Link className="nav-link" to="/football">
//               Football Matches
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/events">
//               Events Booking
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/movies">
//               Movie Tickets
//             </Link>
//           </li>
//         </ul>
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/login">
//               Login
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/signup">
//               Sign Up
//             </Link>
//           </li>
//         </ul>
//       </div>{" "}
//       <br />
//     </nav>
//   );
// };

// export default NavBar;
