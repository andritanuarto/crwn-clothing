import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Hzc6IITLpnpk8ElhJB5SCKZ42U4zTxBJxf1zSEV3Vmcqu8SO1yMlQsdd0RjdS5ATjRZVAHG4ALBJCgeFloYaYCf00iiuZhOye';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;