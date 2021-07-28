import "../App.css";
import Item from "./Item.js";

const Content = ({ data }) => {
  return (
    <div className="content">
      {data.offers.map((offer) => {
        return <Item offer={offer} />;
      })}
    </div>
  );
};

export default Content;
