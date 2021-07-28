import "../App.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <input
        className="searchBar"
        type="text"
        placeholder="Rechercher des articles"
      />
      <button className="CTA-white">s'inscrire | Se connecter</button>
      <button
        className="CTA-blue"
        style={{
          border: "none",
          fontSize: "12px",
          lineHeight: "25px",
          width: "120px",
          marginLeft: "10px",
        }}
      >
        Vends maintenant
      </button>
    </div>
  );
};

export default Header;
