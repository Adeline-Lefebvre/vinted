import "./index.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm.js";
import { Redirect } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

const Payment = ({ token }) => {
  const stripePromise = loadStripe(
    "pk_test_51JKJuRGGHRuiYP3jZRhzSOiru4n3ChQhWlLVZ1AWK4ATkUXn6Rxp9lmyec1S31jNdv9J4oVwRSz7TL9JeUPa94uR005lEK1bTB"
  );
  const location = useLocation();
  const { title } = location.state;

  return (
    <div className="payment">
      {token ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm title={title} />
        </Elements>
      ) : (
        <Redirect to="/user/login" />
      )}
    </div>
  );
};

export default Payment;
