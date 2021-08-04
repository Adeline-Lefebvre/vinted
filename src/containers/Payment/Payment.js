import "./index.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm.js";
import { Redirect } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51JKJuRGGHRuiYP3jZRhzSOiru4n3ChQhWlLVZ1AWK4ATkUXn6Rxp9lmyec1S31jNdv9J4oVwRSz7TL9JeUPa94uR005lEK1bTB"
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { product_name, product_price } = location.state.offer;

  return (
    <div className="payment">
      {token ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm
            product_name={product_name}
            product_price={product_price}
          />
        </Elements>
      ) : (
        <Redirect to="/user/login" />
      )}
    </div>
  );
};

export default Payment;
