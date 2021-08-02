import "./index.css";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const Header = ({ token, setUser, queries, setQueries }) => {
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
          onChange={(event) =>
            setQueries({ ...queries, title: event.target.value })
          }
        />
        <i className="fas fa-search"></i>
      </div>
      {token ? (
        <div style={{ display: "flex" }}>
          <Link
            to="/"
            className="CTA-white"
            style={{ margin: "auto 10px" }}
            onClick={() => setUser(null)}
          >
            Se déconnecter
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Link
            to="/user/signup"
            className="CTA-white"
            style={{ margin: "auto 0", marginRight: "10px" }}
          >
            S'inscrire
          </Link>
          <Link
            to="/user/login"
            className="CTA-white"
            style={{ margin: "auto 0" }}
          >
            Se connecter
          </Link>
        </div>
      )}

      <Link
        to="/publish"
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
      </Link>
    </div>
  );
};

export default Header;
