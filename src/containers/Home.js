import image1 from "../image1.jpeg";
import image2 from "../image2.svg";
import Filters from "../components/Filters.js";
import Content from "../components/Content.js";
import Page from "../components/Page.js";

const Home = ({ data, welcomeMessage, setQueries, queries, min, max }) => {
  return (
    <div>
      <div
        className={welcomeMessage}
        style={{ textAlign: "center", lineHeight: "50px", fontWeight: "bold" }}
      >
        {welcomeMessage}
      </div>

      <div className="images">
        <img className="image1" src={image1} alt="" />
        <img className="image2" src={image2} alt="" />
        <div className="CTA">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <div className="CTA-blue" style={{ marginBottom: "20px" }}>
            Vends maintenant
          </div>
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
