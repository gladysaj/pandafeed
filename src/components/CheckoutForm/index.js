import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { checkout } from '../../services/checkout';

const CheckoutForm = () => {
  const handleToken = async (token) => {
    try {
      console.log(token);
      await checkout(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StripeCheckout
      stripeKey="secret key"
      token={handleToken}
      amount="800"
      description="Collect feedback for your products"
      image="/logo.svg"
      locale="en"
      name="pandafeed.co"
      label="Pay with 💳"
    />
  );
};

export default CheckoutForm;
