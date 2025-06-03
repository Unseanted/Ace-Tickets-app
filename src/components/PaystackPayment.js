import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import TicketModal from "./TicketModal";
import "./PaystackPayment.css";

const PaystackPayment = ({
  amount,
  ticketInfo,
  email = "user@example.com",
  onPaymentSuccess,
}) => {
  const paystackPublicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const [showModal, setShowModal] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState(null);

  const generateTicket = (reference) => {
    return {
      id: `TICKET-${Math.floor(Math.random() * 1000000)}`,
      userEmail: email,
      purchaseDate: new Date().toLocaleString(),
      reference: reference.reference,
      amount,
      event: ticketInfo?.event || "Unnamed Event",
      seat: ticketInfo?.seat || "General",
    };
  };

  const handleSuccess = (reference) => {
    const ticket = generateTicket(reference);
    localStorage.setItem("lastTicket", JSON.stringify(ticket));
    setGeneratedTicket(ticket);
    setShowModal(true);
    onPaymentSuccess(reference);
  };

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey: paystackPublicKey,
    text: "Pay Now",
    onSuccess: handleSuccess,
    className: "btn btn-light w-100 fw-bold ml-9 py-2 text-center "
  };

  return (
    <div>
      <div className="paystack-button-wrapper">
        <PaystackButton {...componentProps} />
      </div>

      <TicketModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        ticketInfo={generatedTicket}
      />
    </div>
  );
};

export default PaystackPayment;

// import React, { useState } from 'react';
// import { PaystackButton } from 'react-paystack';
// import TicketModal from './TicketModal';
// import './PaystackPayment.css';

// const PaystackPayment = ({ amount, ticketInfo }) => {
//   const paystackPublicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
//   const [showModal, setShowModal] = useState(false);

//   const handlePaymentSuccess = (reference) => {
//     console.log('Payment successful, reference:', reference); // Log reference for debugging
//     // generate ticket and display
//     setShowModal(true);
//   };

//   const componentProps = {
//     email: 'user@example.com',
//     amount: amount * 1000,
//     paystackPublicKey,
//     text: 'Pay Now',
//     onSuccess: handlePaymentSuccess,
//     // onClose: () => alert('Wait! You need this ticket, don’t go!!!!'),
//   };

//   return (
//     <div>
//       <div className="paystack-button-wrapper">
//         <PaystackButton {...componentProps} />
//       </div>
//       <TicketModal
//         show={showModal}
//         handleClose={() => setShowModal(false)}
//         ticketInfo={ticketInfo}
//       />
//     </div>
//   );
// };

// export default PaystackPayment;
