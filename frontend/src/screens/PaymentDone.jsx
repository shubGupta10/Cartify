import React from 'react';
import { Link } from 'react-router-dom'; 

const PaymentDone = () => {
  return (
    <div>
      <h2>Payment is Done</h2>
      <p>Thank you for your payment!</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default PaymentDone;
