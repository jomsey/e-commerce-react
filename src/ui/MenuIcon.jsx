import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import "./MenuIcon.css";


function MenuIcon({ visible = true,HandleMenuIconClick }) {
  return (
    <Icon
      iconName={"bars"}
      onIconClick={HandleMenuIconClick}
      extra={visible ? "menu-icon" : "not-visible"}
    />
  );
}

MenuIcon.propTypes = {
  visible: PropTypes.bool,
  HandleMenuIconClick:PropTypes.func
};

export default MenuIcon;
