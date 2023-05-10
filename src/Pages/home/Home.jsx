import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
    </div>
  );
};

export default Home;
