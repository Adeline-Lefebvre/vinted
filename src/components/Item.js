import "../App.css";
import { Link } from "react-router-dom";

const Item = ({ offer }) => {
  const price = offer.product_price.toFixed(2);
  return (
    <div>
      {/* {offer.owner.avatar.secure_url && (
        <img src={offer.owner.account.avatar.secure_url} alt="" />
      )} */}
      <div className="username">{offer.owner.account.username}</div>
      <Link to={`/offer/${offer._id}`}>
        <img src={offer.product_image.secure_url} alt="" />
      </Link>

      <div className="price">{price} €</div>
      <div style={{ color: "gray", fontSize: "12px" }}>
        {offer.product_details[1].size}
      </div>
      <div style={{ color: "gray", fontSize: "12px" }}>
        {offer.product_details[0].brand}
      </div>
    </div>
  );
};

export default Item;
