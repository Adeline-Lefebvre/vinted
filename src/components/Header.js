import "../App.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img className="logo" src={logo} alt="" />
        <button>s'inscrire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
