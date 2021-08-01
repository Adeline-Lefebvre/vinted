import "../App.css";
import PriceRange from "./PriceRange.js";

const Filters = ({ setQueries, queries, min, max }) => {
  const handleSetQueries = () => {
    if (queries.sort === "price-asc") {
      setQueries({ ...queries, sort: "price-desc" });
    } else if (queries.sort === "price-desc") {
      setQueries({ ...queries, sort: "price-asc" });
    }
  };

  return (
    <div className="filters">
      <div style={{ marginRight: "10px" }}>Trier par prix :</div>
      <div className="checkbox">
        <div
          className="wrap"
          onClick={() => {
            handleSetQueries();
          }}
        >
          <div
            className={
              queries.sort === "price-asc" ? "knob left" : "knob right"
            }
          >
            {queries.sort === "price-asc" ? (
              <i className="fas fa-arrow-up"></i>
            ) : (
              <i className="fas fa-arrow-down"></i>
            )}
          </div>
        </div>
      </div>
      <div>Prix entre :</div>
      <PriceRange
        min={min}
        max={max}
        setQueries={setQueries}
        queries={queries}
      />
      <div>Produits par page :</div>
      <select
        name="products"
        className="nb-products"
        onChange={(event) => {
          setQueries({ ...queries, limit: event.target.value });
        }}
      >
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
    </div>
  );
};

export default Filters;

// skip : Number
// limit : Number
