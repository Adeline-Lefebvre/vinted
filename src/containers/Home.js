import { Link } from "react-router-dom";
import Header from "../components/Header.js";

const Home = () => {
  return (
    <div>
      <Header />
      Homepage
      <a target="_blank" href="http://localhost:3001/offer">
        Go to offer
      </a>
    </div>
  );
};

export default Home;
