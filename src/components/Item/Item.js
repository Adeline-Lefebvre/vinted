import "./index.css";
import { Link } from "react-router-dom";

const Item = ({ offer }) => {
  console.log(offer);
  return (
    <Link to={`/offer/${offer._id}`} style={{ textDecoration: "none" }}>
      <div>
        <div className="user">
          {offer.owner.account.avatar && (
            <img src={offer.owner.account.avatar.secure_url} alt="" />
          )}
          <div className="username">{offer.owner.account.username}</div>
        </div>
        <div className="picture">
          <img src={offer.product_image.secure_url} alt="" />
        </div>
        <div className="price">{offer.product_price.toFixed(2)} €</div>
        <div style={{ color: "gray", fontSize: "12px" }}>
          {offer.product_details[1].size}
        </div>
        <div style={{ color: "gray", fontSize: "12px", marginBottom: "10px" }}>
          {offer.product_details[0].brand}
        </div>
      </div>
    </Link>
  );
};

export default Item;
