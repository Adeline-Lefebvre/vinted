import "./index.css";
import { Link } from "react-router-dom";

const Item = ({ offer }) => {
  return (
    <Link to={`/offer/${offer._id}`}>
      <div>
        <div className="item-user">
          {offer.owner.account.avatar && (
            <img src={offer.owner.account.avatar.secure_url} alt="" />
          )}
          <div className="item-username">{offer.owner.account.username}</div>
        </div>
        <div className="item-picture">
          <img src={offer.product_image.secure_url} alt="" />
        </div>
        <div className="item-price">{offer.product_price.toFixed(2)} €</div>
        <div className="item-size">{offer.product_details[1].size}</div>
        <div className="item-brand">{offer.product_details[0].brand}</div>
      </div>
    </Link>
  );
};

export default Item;
