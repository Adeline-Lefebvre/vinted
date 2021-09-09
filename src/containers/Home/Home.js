import "./index.css";
import "../../responsive.css";
import image1 from "../../image1.jpeg";
import image2 from "../../image2.svg";
import Filters from "../../components/Filters/Filters.js";
import Content from "../../components/Content/Content.js";
import Page from "../../components/PageNum/Page.js";
import { Link } from "react-router-dom";

const Home = ({ data, welcomeMessage, setQueries, queries, min, max }) => {
  return (
    <div>
      <div className="welcomeMessage">{welcomeMessage}</div>
      <div className="sub-header">
        <img className="image1" src={image1} alt="" />
        <img className="image2" src={image2} alt="" />
        <div className="headline">
          <h1 style={{ fontSize: "36px" }}>
            Prêts à faire du tri dans vos placards ?
          </h1>
          <Link to="/publish">
            <button className="CTA-blue-big">Vends maintenant</button>
          </Link>
          <a href="https://www.vinted.fr/how_it_works">
            Découvrir comment ça marche
          </a>
        </div>
      </div>
      <Filters setQueries={setQueries} queries={queries} min={min} max={max} />
      <Content data={data} />
      <Page setQueries={setQueries} queries={queries} data={data} />
    </div>
  );
};

export default Home;
