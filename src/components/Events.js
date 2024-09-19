import React, { useState } from 'react';
import TicketModal from './TicketModal';
import PaystackPayment from './PaystackPayment';
import './Events.css';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [ticket, setTicket] = useState({});
  const [selectedEvent, setSelectedEvent] = useState('');

  const handlePaymentSuccess = (reference) => {
    const ticketDetails = {
      event: `Event - ${selectedEvent}`,
      date: '2024-09-30',
      seat: 'C10',
      id: reference
    };
    setTicket(ticketDetails);
    setShowModal(true);
  };

  return (
    <div className="events-page">
      <h1>Event Tickets</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="eventSelect">Select Event:</label>
          <select
            id="eventSelect"
            className="form-control"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            required
          >
            <option value="">Select an event</option>
            <option value="Concert">Concert</option>
            <option value="Conference">Conference</option>
            <option value="Festival">Festival</option>
          </select>
        </div>
        <PaystackPayment amount={10000} email="user@example.com" onPaymentSuccess={handlePaymentSuccess} />
      </form>
      <TicketModal show={showModal} handleClose={() => setShowModal(false)} ticket={ticket} />
    </div>
  );
};

export default Events;
