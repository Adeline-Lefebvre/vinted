import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";
import Header from "./components/Header.js";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [id, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
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
      <Header />
      <Switch>
        <Route path="/" exact component={Home}>
          <Home data={data} />
        </Route>
        <Route path="/offer/:id" component={Offer}>
          <Offer data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//id={id} setId={setId}
