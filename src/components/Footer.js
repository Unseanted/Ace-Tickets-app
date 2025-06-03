import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className=" fixed-bottom w-100 text-center text-light py-2"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "0.85rem",
      }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-1 mb-md-0 text-white">
          &copy; 2025 <strong>Ace-Tickets</strong>. All rights reserved.
        </p>

        <div>
          <a href="#" className="text-info mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-info mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-info mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-info mx-2">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-info mx-2">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; 2024 Ace-Tickets. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
