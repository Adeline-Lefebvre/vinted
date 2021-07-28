import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route path="/offer">
          <Offer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
