import "./index.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm.js";
import { Redirect } from "react-router-dom";
import React from "react";

const Payment = ({ token, offer }) => {
  const stripePromise = loadStripe(
    "pk_test_51JKJuRGGHRuiYP3jZRhzSOiru4n3ChQhWlLVZ1AWK4ATkUXn6Rxp9lmyec1S31jNdv9J4oVwRSz7TL9JeUPa94uR005lEK1bTB"
  );

  return (
    <div className="payment">
      {token ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm offer={offer} />
        </Elements>
      ) : (
        <Redirect to="/user/login" />
      )}
    </div>
  );
};

export default Payment;
