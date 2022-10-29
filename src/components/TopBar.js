import "./TopBar.css";
import logo from "../assets/logo.jpg";
import TopBarIcons from "./TopBarIcons";
import Icon from "../ui/Icon";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../ui/MenuIcon";
import PropTypes from "prop-types";
import ProductCategories from "./ProductCategoryContainer";

function TopBar({ showToggler }) {
  const [displace, setDisplace] = useState(false);
  const [offCanvasVisible, setOffCanvasVisibility] = useState(false);

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

  let offCanvasClasses = offCanvasVisible
    ? "category-off-canvas show-off-canvas"
    : " category-off-canvas";
    
  return (
    <>
      <div className={topBarClasses}>
        <div className="left">
          <MenuIcon
            visible={showToggler}
            HandleMenuIconClick={() => {
              offCanvasVisible === false
                ? setOffCanvasVisibility(true)
                : setOffCanvasVisibility(false);
            }}
          />
          {showToggler && (
            <div className={offCanvasClasses}>
              <ProductCategories />
            </div>
          )}

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
    </>
  );
}

TopBar.propTypes = {
  showToggler: PropTypes.bool,
};

export default TopBar;
