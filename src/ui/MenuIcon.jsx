import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import "./MenuIcon.css";


function MenuIcon({ visible = true,onMenuIconClick }) {
  return (
    <Icon
      iconName={"bars"}
      onIconClick={onMenuIconClick}
      extra={visible ? "menu-icon" : "not-visible"}
    />
  );
}

MenuIcon.propTypes = {
  visible: PropTypes.bool,
  onMenuIconClick:PropTypes.func
};

export default MenuIcon;
