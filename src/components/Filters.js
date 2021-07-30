import "../App.css";
import { useState } from "react";

const Filters = () => {
  const [arrowUp, setArrowUp] = useState(true);

  return (
    <div className="filters">
      <div style={{ marginRight: "10px" }}>Trier par prix :</div>
      <div className="checkbox">
        <div className="wrap">
          <div
            className={arrowUp ? "knob left" : "knob right"}
            onClick={() => setArrowUp(!arrowUp)}
          >
            {arrowUp ? (
              <i className="fas fa-arrow-up"></i>
            ) : (
              <i className="fas fa-arrow-down"></i>
            )}
          </div>
        </div>
      </div>
      <div>Prix entre :</div>
      <div></div>
    </div>
  );
};

export default Filters;

{
  /* <div className="ui fitted toggle checkbox">
        <div type="checkbox" className="hidden" readonly="" tabindex="0" />
        <label></label>
      </div> */
}
