import { Link } from "react-router-dom";
import "./navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Site teste</span>
      </Link>
      <HomeIcon />
      <div className="search">
        <SearchIcon />
        <input type="Search...." />
      </div>
    </div>
  );
};

export default Navbar;
