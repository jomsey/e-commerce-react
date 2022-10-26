import "./TopBar.css";
import logo from "../assets/logo.jpg";
import TopBarIcons from "./TopBarIcons";
import Icon from "../ui/Icon";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../ui/MenuIcon";

function TopBar() {
  const [displace, setDisplace] = useState(false);
  const handleScroll = () => {
    window.scrollY < 200 ? setDisplace(true) : setDisplace(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let topBarClasses = displace ? "top-bar displace-bar" : "top-bar";
  return (
    <div className={topBarClasses}>
      <div className="left">
        <MenuIcon visible />
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </div>
      <form action="">
        <input
          type="search"
          placeholder="search product , category and promotions"
          maxLength={50}
          name="q"
        />
        <Icon iconName={"magnifying-glass"} extra="search-icon" />
        <button type="submit">SEARCH</button>
      </form>
      <div className="top-bar-icons">
        <TopBarIcons />
      </div>
    </div>
  );
}

export default TopBar;
