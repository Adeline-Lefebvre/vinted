import "./index.css";
import "../../responsive.css";
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
          <Link to="/" className="CTA-white" onClick={() => setUser(null)}>
            Se déconnecter
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <Link to="/user/signup" className="CTA-white">
            S'inscrire
          </Link>
          <Link to="/user/login" className="CTA-white">
            Se connecter
          </Link>
          <Link to="/user/signup" className="login-signup">
            S'inscrire / Se connecter
          </Link>
        </div>
      )}
      <Link to="/publish" className="CTA-blue-small">
        Vends maintenant
      </Link>
    </div>
  );
};

export default Header;
