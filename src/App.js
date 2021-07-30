import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";
import Signup from "./containers/Signup.js";
import Login from "./containers/Login.js";
import Cookies from "js-cookie";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token, {
        expires: 7,
        sameSite: "none",
        secure: true,
      });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
      setWelcomeMessage(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vinted-react-by-adeline.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <Router>
      <Header token={token} setUser={setUser} />
      <Switch>
        <Route path="/" exact>
          <Home data={data} welcomeMessage={welcomeMessage} />
        </Route>
        <Route path="/offer/:id">
          <Offer data={data} />
        </Route>
        <Route path="/user/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/user/login">
          <Login setUser={setUser} setWelcomeMessage={setWelcomeMessage} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
