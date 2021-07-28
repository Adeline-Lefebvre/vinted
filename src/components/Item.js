import "../App.css";
import { Link } from "react-router-dom";

const Item = ({ offer }) => {
  const price = offer.product_price.toFixed(2);
  return (
    <div>
      {/* {offer.owner.avatar.url && (
        <img src={offer.owner.account.avatar.url} alt="" />
      )} */}
      <div className="username">{offer.owner.account.username}</div>
      <Link to={`/offer/${offer._id}`}>
        <img src={offer.product_image.url} alt="" />
      </Link>

      <div className="price">{price} €</div>
      {offer.product_details.map((detail) => {
        return (
          detail.TAILLE && (
            <div style={{ color: "gray", fontSize: "12px" }}>
              {detail.TAILLE}
            </div>
          )
        );
      })}
      {offer.product_details.map((detail) => {
        return (
          detail.MARQUE && (
            <div style={{ color: "gray", fontSize: "12px" }}>
              {detail.MARQUE}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Item;
