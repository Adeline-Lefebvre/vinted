import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newsletter, setNewsletter] = useState(false);

  const url = "https://vinted-react-by-adeline.herokuapp.com/user/signup";
  const data = {
    username: username,
    email: email,
    password: password,
    newsletter: newsletter,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = await axios.post(url, data);
      Cookies.set("token", newUser.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 style={{ margin: "50px auto", textAlign: "center" }}>S'inscrire</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div>
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id=""
            onChange={(event) => {
              setNewsletter(true);
            }}
          />
          <span style={{ color: "gray" }}>S'inscrire à notre newsletter</span>
          <p className="conditions-checkbox">
            En m'inscrivant je confirme avoir lu et accepté les Termes,
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>

        <button className="CTA-blue" type="submit">
          S'inscrire
        </button>
        <Link to="/user/login" className="link">
          <div className="link" style={{ fontSize: "12px" }}>
            Tu as déjà un compte ? Connecte-toi !
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
