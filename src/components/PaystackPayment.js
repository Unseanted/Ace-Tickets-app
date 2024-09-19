import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import TicketModal from './TicketModal';
import './PaystackPayment.css'; // Import the CSS file for custom styles

const PaystackPayment = ({ amount, ticketInfo }) => {
  const publicKey = 'pk_test_50d6893eedd19ffff45142df8c8b6619883a0509';
  const [showModal, setShowModal] = useState(false);

  const handlePaymentSuccess = (reference) => {
    console.log('Payment successful, reference:', reference); // Log reference for debugging
    setShowModal(true);
  };

  const componentProps = {
    email: 'user@example.com',
    amount: amount * 100,
    publicKey,
    text: 'Pay Now',
    onSuccess: handlePaymentSuccess,
    onClose: () => alert('Wait! You need this ticket, don’t go!!!!'),
  };

  return (
    <div>
      <div className="paystack-button-wrapper">
        <PaystackButton {...componentProps} />
      </div>
      <TicketModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        ticketInfo={ticketInfo}
      />
    </div>
  );
};

export default PaystackPayment;
