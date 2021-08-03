import "./index.css";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({ title }) => {
  const stripe = useStripe();
  const elements = useElements();
  // const total = Number(offer.product_price) + 1.2;

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "L'id de l'acheteur",
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    const response = await axios.post(
      "https://vinted-react-by-adeline.herokuapp.com/payment",
      {
        stripeToken,
      }
    );
    console.log(response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return (
    <div className="checkoutform">
      {!completed ? (
        <div>
          <div className="checkoutform-title">Résumé de la commande</div>
          <div className="checkoutform-fees">
            <div className="checkoutform-fee">
              <div>Commande</div>
              <div>offer.product_price €</div>
            </div>
            <div className="checkoutform-fee">
              <div>Frais protection acheteurs</div>
              <div>0.40 €</div>
            </div>
            <div className="checkoutform-fee">
              <div>Frais de port</div>
              <div>0.80 €</div>
            </div>
          </div>

          <div>
            <div className="checkoutform-total">
              <div>Total</div>
              <div>total €</div>
            </div>
            <div className="checkoutform-last-step">
              Il ne vous reste plus qu'une étape pour vous offrir
              <span> {title}</span>. Vous allez payer total € (frais de
              protection et frais de port inclus).
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <CardElement className="cardelement" />
            <button type="submit" className="CTA-pay">
              Payer
            </button>
          </form>
        </div>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </div>
  );
};

export default CheckoutForm;
