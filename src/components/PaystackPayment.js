import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import TicketModal from './TicketModal';
import './PaystackPayment.css';

const PaystackPayment = ({ amount, ticketInfo }) => {
  const paystackPublicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const [showModal, setShowModal] = useState(false);

  const handlePaymentSuccess = (reference) => {
    console.log('Payment successful, reference:', reference); // Log reference for debugging
    setShowModal(true);
  };

  const componentProps = {
    email: 'user@example.com',
    amount: amount * 1000,
    paystackPublicKey,
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
