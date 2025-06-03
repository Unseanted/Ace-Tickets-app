import React, { useState } from "react";
import TicketModal from "./TicketModal";
import PaystackPayment from "./PaystackPayment";
import "./Football.css";

const Football = () => {
  const [showModal, setShowModal] = useState(false);
  const [ticket, setTicket] = useState({});
  const [selectedGame, setSelectedGame] = useState("");

  const handlePaymentSuccess = (reference) => {
    const ticketDetails = {
      event: `Football Match - ${selectedGame}`,
      date: "2024-09-30",
      seat: "A12",
      id: reference,
    };
    setTicket(ticketDetails);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="football-wrapper d-flex justify-content-center align-items-center">
      <div className="football-box p-5 rounded shadow">
        <h2 className="text-center text-white mb-4">
          ⚽ Book Your Match Ticket
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="gameSelect" className="form-label text-white small">
              Select Game
            </label>
            <select
              id="gameSelect"
              className="form-control form-control-sm"
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              required
            >
              <option value="">Select a game</option>
              <option value="Plateau United FC vs Mighty Jets FC">
                Plateau United FC vs Mighty Jets FC
              </option>
              <option value="JUTH FC vs Izam Boys FC">
                JUTH FC vs Izam Boys FC
              </option>
              <option value="Russia Fox FC vs Ukadum Hills Boys">
                Russia Fox FC vs Ukadum Hills Boys
              </option>
            </select>
          </div>

          <div className="d-grid" id="btn">
            <PaystackPayment
              amount={5000}
              email="user@example.com"
              onPaymentSuccess={handlePaymentSuccess}
              buttonText="Buy Ticket"
              className="btn-soccer"
              
            />
          </div>
        </form>
      </div>

      <TicketModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        ticket={ticket}
      />
    </div>
  );
};

export default Football;

// import React, { useState } from 'react';
// import TicketModal from './TicketModal';
// import PaystackPayment from './PaystackPayment';
// import './Football.css';

// const Football = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [ticket, setTicket] = useState({});
//   const [selectedGame, setSelectedGame] = useState('');

//   const handlePaymentSuccess = (reference) => {
//     const ticketDetails = {
//       event: `Football Match - ${selectedGame}`,
//       date: '2024-09-30',
//       seat: 'A12',
//       id: reference
//     };
//     setTicket(ticketDetails);
//     setShowModal(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Proceed to payment
//   };

//   return (
//     <div className="football-page">
//       <h1>Football Matches</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="gameSelect">Select Game:</label>
//           <select
//             id="gameSelect"
//             className="form-control"
//             value={selectedGame}
//             onChange={(e) => setSelectedGame(e.target.value)}
//             required
//           >
//             <option value="">Select a game</option>
//             <option value="Team A vs Team B">Plateau United FC vs Mighty Jets FC</option>
//             <option value="Team C vs Team D">JUTH FC vs Izam Boys FC</option>
//             <option value="Team E vs Team F">Russia Fox FC vs Ukadum Hills Boys</option>
//           </select>
//         </div>
//         <PaystackPayment amount={5000} email="user@example.com" onPaymentSuccess={handlePaymentSuccess} />
//       </form>
//       <TicketModal show={showModal} handleClose={() => setShowModal(false)} ticket={ticket} />
//     </div>
//   );
// }

// export default Football;
