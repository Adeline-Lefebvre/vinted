import image1 from "../image1.jpeg";
import image2 from "../image2.svg";
import Content from "../components/Content.js";

const Home = ({ data }) => {
  return (
    <div>
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

      <Content data={data} />
    </div>
  );
};

export default Home;
