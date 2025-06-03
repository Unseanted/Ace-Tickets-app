import React from "react";
import { Modal, Button } from "react-bootstrap";
import QRCode from "qrcode.react";

const TicketModal = ({ show, handleClose, ticketInfo }) => {
  if (!ticketInfo) return null;

  const {
    id,
    event,
    movie,
    details,
    seat,
    reference,
    userEmail,
    amount,
    purchaseDate,
  } = ticketInfo;

  // QR Code content - Encode ticket ID and reference
  const qrData = JSON.stringify({
    id,
    reference,
    email: userEmail,
    event: event?.title || movie?.title,
    seat,
  });

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>🎟️ Ticket Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            <strong>Ticket ID:</strong> {id}
          </p>
          <p>
            <strong>Reference:</strong> {reference}
          </p>
          <p>
            <strong>Email:</strong> {userEmail}
          </p>
          <p>
            <strong>Seat:</strong> {seat}
          </p>
          <p>
            <strong>Amount:</strong> ₦{amount}
          </p>
          <p>
            <strong>Date:</strong> {purchaseDate}
          </p>
        </div>

        {event && (
          <div className="mt-3">
            <h5>🎉 Event Details</h5>
            <p>
              <strong>Title:</strong> {event.title}
            </p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
          </div>
        )}

        {movie && (
          <div className="mt-3">
            <h5>🎬 Movie Details</h5>
            <p>
              <strong>Title:</strong> {movie.title}
            </p>
            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
          </div>
        )}

        {details && (
          <div className="mt-3">
            <h5>📝 Extra Info</h5>
            <p>{details}</p>
          </div>
        )}

        <div className="mt-4 text-center">
          <QRCode value={qrData} size={160} />
          <p className="text-muted mt-2">Scan at entrance</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketModal;

// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import QRCode from 'qrcode.react';

// const TicketModal = ({ show, handleClose, ticketInfo }) => {
//   if (!ticketInfo) {
//     return null; // Handle case where ticketInfo is undefined
//   }

//   const { event, movie, details } = ticketInfo;

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Ticket Confirmation</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {event && (
//           <div>
//             <h5>Event: {event.title}</h5>
//             <p>Date: {event.date}</p>
//           </div>
//         )}
//         {movie && (
//           <div>
//             <h5>Movie: {movie.title}</h5>
//             <p>Genre: {movie.genre}</p>
//           </div>
//         )}
//         {details && (
//           <div>
//             <h5>Details:</h5>
//             <p>{details}</p>
//           </div>
//         )}
//         <QRCode value="Sample QR Code Data" />
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default TicketModal;
