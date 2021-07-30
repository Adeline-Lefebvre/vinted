import "../App.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className="searchBar">
        <input
          className="searchInput"
          type="text"
          placeholder="Rechercher des articles"
        />
        <i class="fas fa-search"></i>
      </div>
      <Link to="/user/signup" style={{ margin: "auto 0" }}>
        <button className="CTA-white" style={{ marginRight: "10px" }}>
          s'inscrire
        </button>
      </Link>
      <Link to="/user/login" style={{ margin: "auto 0" }}>
        <button className="CTA-white">Se connecter</button>
      </Link>

      <button
        className="CTA-blue"
        style={{
          border: "none",
          fontSize: "12px",
          lineHeight: "27px",
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
