import "./App.css";
import "./responsive.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";
import Signup from "./containers/Signup.js";
import Login from "./containers/Login.js";
import Cookies from "js-cookie";
import Publish from "./containers/Publish.js";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const min = 0;
  const max = 200;
  const [queries, setQueries] = useState({
    title: null,
    priceMin: min,
    priceMax: max,
    sort: "price-asc",
    skip: 1,
    limit: 20,
  });

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

  let title = "";
  let priceMin = "";
  let priceMax = "";
  let skip = "";
  let limit = "";

  if (queries.title) title = `&title=${queries.title}`;
  if (queries.priceMin) priceMin = `&priceMin=${queries.priceMin}`;
  if (queries.priceMax) priceMax = `&priceMax=${queries.priceMax}`;
  if (queries.skip) skip = `&skip=${queries.skip}`;
  if (queries.limit) limit = `&limit=${queries.limit}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(
          `https://vinted-react-by-adeline.herokuapp.com/offers?sort=${queries.sort}${title}${priceMin}${priceMax}${skip}${limit}`
        );
        const response = await axios.get(
          `https://vinted-react-by-adeline.herokuapp.com/offers?sort=${queries.sort}${title}${priceMin}${priceMax}${skip}${limit}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [queries, title, priceMin, priceMax, skip, limit]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <Router>
      <Header
        token={token}
        setUser={setUser}
        setQueries={setQueries}
        queries={queries}
      />
      <Switch>
        <Route path="/" exact>
          <Home
            data={data}
            welcomeMessage={welcomeMessage}
            setQueries={setQueries}
            queries={queries}
            min={min}
            max={max}
          />
        </Route>
        <Route path="/offer/:id">
          <Offer data={data} />
        </Route>
        <Route path="/user/signup">
          <Signup setUser={setUser} setWelcomeMessage={setWelcomeMessage} />
        </Route>
        <Route path="/user/login">
          <Login setUser={setUser} setWelcomeMessage={setWelcomeMessage} />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
