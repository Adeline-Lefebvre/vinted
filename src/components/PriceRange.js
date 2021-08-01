import "../App.css";
import { useRef } from "react";
import { useCallback, useEffect } from "react";

const PriceRange = ({ min, max, queries, setQueries }) => {
  const minValRef = useRef(min);
  const maxValRef = useRef(max);

  const range = useRef(null);

  const getPercent = useCallback(
    (value) => {
      return Math.round(((value - min) / (max - min)) * 100);
    },
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(queries.priceMin);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [queries.priceMin, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(queries.priceMax);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [queries.priceMax, getPercent]);

  return (
    <>
      <div className="slider">
        <input
          type="range"
          min={min}
          max={max}
          value={queries.priceMin}
          onChange={(event) => {
            const value = Math.min(
              Number(event.target.value),
              queries.priceMax - 1
            );
            setQueries({ ...queries, priceMin: value });
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: queries.priceMin > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={queries.priceMax}
          onChange={(event) => {
            const value = Math.max(
              Number(event.target.value),
              queries.priceMin + 1
            );
            setQueries({ ...queries, priceMax: value });
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{queries.priceMin} €</div>
        <div className="slider__right-value">
          {queries.priceMax} €{queries.priceMax === 200 && " +"}
        </div>
      </div>
    </>
  );
};

export default PriceRange;
