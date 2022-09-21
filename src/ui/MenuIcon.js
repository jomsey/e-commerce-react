import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import "./MenuIcon.css";

function HandleIconClick() {
  console.log("clicked");
}

function MenuIcon({ visible = true }) {
  return (
    <Icon
      iconName={"bars"}
      onIconClick={HandleIconClick}
      extra={visible ? "menu-icon" : "not-visible"}
    />
  );
}

MenuIcon.propTypes = {
  visible: PropTypes.bool,
};

export default MenuIcon;
