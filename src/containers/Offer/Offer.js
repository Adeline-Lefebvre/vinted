import "./index.css";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Offer = ({ data, setOffer }) => {
  const { id } = useParams();

  const history = useHistory();

  const offer = data.offers.find((elem) => elem._id === id);
  const price = offer.product_price.toFixed(2);

  return (
    <div className="offer">
      <img src={offer.product_image.secure_url} alt="" />
      <div className="infos">
        <div className="infos-price">{price} €</div>
        <div className="infos-details">
          <div className="infos-details-titles">
            <div>MARQUE</div>
            <div>TAILLE</div>
            <div>ETAT</div>
            <div>COULEUR</div>
            <div>EMPLACEMENT</div>
          </div>
          <div className="infos-details-col-2">
            <div>{offer.product_details[0].brand}</div>
            <div>{offer.product_details[1].size}</div>
            <div>{offer.product_details[2].condition}</div>
            <div>{offer.product_details[3].color}</div>
            <div>{offer.product_details[4].city}</div>
          </div>
        </div>
        <div className="infos-product-name">{offer.product_name}</div>
        <div className="infos-description">{offer.product_description}</div>
        <div className="infos-user">
          {offer.owner.account.avatar && (
            <img src={offer.owner.account.avatar.secure_url} alt="" />
          )}
          <div>{offer.owner.account.username}</div>
        </div>
        <button
          className="infos-CTA-buy"
          onClick={() => {
            setOffer(offer);
            history.push("/payment");
          }}
        >
          Acheter
        </button>
      </div>
    </div>
  );
};

export default Offer;
