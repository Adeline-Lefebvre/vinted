import "./App.css";
import "./responsive.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Header from "./components/Header/Header.js";
import Home from "./containers/Home/Home.js";
import Offer from "./containers/Offer/Offer.js";
import Signup from "./containers/Signup/Signup.js";
import Login from "./containers/Login/Login.js";
import Cookies from "js-cookie";
import Publish from "./containers/Publish/Publish.js";
import Footer from "./components/Footer/Footer.js";
import Payment from "./containers/Payment/Payment.js";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const min = 0; // Prix minimum du composant PriceRange
  const max = 200; // Prix maximum du composant PriceRange
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
    <ReactLoading
      type="bubbles"
      color="#0baeb7"
      height={600}
      width={160}
      className="loading"
    />
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
          <Publish token={token} />
        </Route>
        <Route path="/payment">
          <Payment token={token} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
