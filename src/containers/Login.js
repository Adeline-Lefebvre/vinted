import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const url = "https://vinted-react-by-adeline.herokuapp.com/user/login";
  const data = {
    email: email,
    password: password,
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
      <h1 style={{ margin: "50px auto", textAlign: "center" }}>Se connecter</h1>
      <form className="form" onSubmit={handleSubmit}>
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

        <button className="CTA-blue" type="submit">
          Se connecter
        </button>
        <Link to="/user/signup" className="link">
          <div className="link" style={{ fontSize: "12px" }}>
            Pas encore de compte ? Inscris-toi !
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Login;
