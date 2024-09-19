import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import QRCode from 'qrcode.react';

const TicketModal = ({ show, handleClose, ticketInfo }) => {
  if (!ticketInfo) {
    return null; // Handle case where ticketInfo is undefined
  }

  const { event, movie, details } = ticketInfo;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ticket Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {event && (
          <div>
            <h5>Event: {event.title}</h5>
            <p>Date: {event.date}</p>
          </div>
        )}
        {movie && (
          <div>
            <h5>Movie: {movie.title}</h5>
            <p>Genre: {movie.genre}</p>
          </div>
        )}
        {details && (
          <div>
            <h5>Details:</h5>
            <p>{details}</p>
          </div>
        )}
        <QRCode value="Sample QR Code Data" />
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
