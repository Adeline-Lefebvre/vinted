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
    </div>
  );
};

export default Filters;

// priceMin : Number
// priceMax : Number
// skip : Number
// limit : Number
