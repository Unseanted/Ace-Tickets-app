import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Welcome = () => {
  return (
    <div
      style={{
        height: "80vh",
        fontFamily: "'Roboto', sans-serif",
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        position: "relative",
      }}
      className="text-white"
    >
      {/* Carousel Background */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{ zIndex: 1 }}
      >
        <div
          id="mainCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ maxHeight: "60vh" }}>
            <div className="carousel-item active">
              <img
                src="/background.jpg"
                className="d-block w-100"
                alt="Entertainment"
                style={{
                  objectFit: "cover",
                  height: "60vh",
                  filter: "brightness(0.4)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

    

      {/* Centered Frosted Content */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          zIndex: 2,
          position: "relative",
        }}
      >
        <motion.div
          className="container rounded shadow-lg px-4 py-5 text-center"
          style={{
            backdropFilter: "blur(1.2px)",
            backgroundColor: "rgba(0, 0, 0, 0.49)",
            maxWidth: "850px",
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-5 fw-bold mb-3" style={{ color: "#0083a8",  fontFamily: "fantasy"}}>
            Welcome to Ace-Tickets
          </h1>
          <p className="lead text-light mb-4">
            Book tickets for your favorite <strong>movies</strong>, exciting{" "}
            <strong>football matches</strong>, and unforgettable{" "}
            <strong>live events</strong> – all in one place.
          </p>
          <motion.a
            href="/movies"
            className="btn btn-lg px-4 py-2 text-white"
            style={{ backgroundColor: "#006fa1", border: "none" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎟 Book Tickets
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;

// import React from "react";
// import { motion } from "framer-motion";
// import moviesImage from "./movies1.png";
// import sportsImage from "./sports.png";
// import eventsImage from "./event1.png";

// const Welcome = () => {
//   return (
//     <div className="container text-center py-5">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="fw-bold mb-3 text-primary">Welcome to Ace-Tickets</h1>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <p className="lead text-secondary">
//           Your one-stop solution for booking tickets for movies, football
//           matches, and events.
//         </p>
//       </motion.div>

//       <div className="row mt-5 justify-content-center g-4">
//         <div className="col-6 col-md-4">
//           <motion.img
//             src={moviesImage}
//             alt="Movies"
//             title="Book movie tickets"
//             className="img-fluid rounded shadow"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           />
//         </div>
//         <div className="col-6 col-md-4">
//           <motion.img
//             src={sportsImage}
//             alt="Football"
//             title="Book football match tickets"
//             className="img-fluid rounded shadow"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           />
//         </div>
//         <div className="col-6 col-md-4">
//           <motion.img
//             src={eventsImage}
//             alt="Events"
//             title="Book event tickets"
//             className="img-fluid rounded shadow"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;

//   // ......... not so good style two..........

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import moviesImage from './movies1.png';
// // import sportsImage from './sports.png';
// // import eventsImage from './event1.png';

// // const Welcome = () => {
// //   return (
// //     <div
// //       className="text-center d-flex justify-content-center align-items-center"
// //       style={{
// //         backgroundImage: 'url("/background.jpg")',
// //         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: '#fff',
//         minHeight: '100vh',
//         padding: '2rem',
//         overflowX: 'hidden',
//       }}
//     >
//       <div className="container">
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fw-bold mb-4"
//           style={{ color: '#a78cc5' }}
//         >
//           Welcome to Ace-Tickets
//         </motion.h1>

//         <motion.p
//           className="lead"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           style={{ color: '#ff6f91' }}
//         >
//           Your one-stop solution for booking tickets for movies, football matches, and events.
//         </motion.p>

//         <div className="row justify-content-center mt-4 g-3">
//           {[{ img: moviesImage, delay: 0.4 }, { img: sportsImage, delay: 0.6 }, { img: eventsImage, delay: 0.8 }].map(
//             ({ img, delay }, idx) => (
//               <div key={idx} className="col-10 col-sm-6 col-md-4">
//                 <motion.img
//                   src={img}
//                   alt="highlight"
//                   className="img-fluid rounded shadow"
//                   style={{ maxHeight: '250px', objectFit: 'cover' }}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay }}
//                   whileHover={{ scale: 1.05 }}
//                 />
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;

// import React from 'react';
// import { motion } from 'framer-motion';
// import './Welcome.css';
// import moviesImage from './movies1.png';
// import sportsImage from './sports.png';
// import eventsImage from './event1.png';

// const Welcome = () => {
//   return (
//     <div className="welcome-container">
//       <div className="welcome-content">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className=''>Welcome to Ace-Tickets</h1>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <p>Your one-stop solution for booking tickets for movies, football matches, and events.</p>
//         </motion.div>
//         <div className="welcome-images">
//           <motion.img
//             src={moviesImage}
//             alt="Movies"
//             title="Book movie tickets"
//             className="welcome-image"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           />
//           <motion.img
//             src={sportsImage}
//             alt="Football"
//             title="Book football match tickets"
//             className="welcome-image"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           />
//           <motion.img
//             src={eventsImage}
//             alt="Events"
//             title="Book event tickets"
//             className="welcome-image"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;
