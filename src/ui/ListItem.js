import Icon from "./Icon";
import "./ListItem.css";
import PropTypes from "prop-types";

function ListItem({
  onItemClick,
  icon,
  text,
  iconStyle,
  itemStyle,
  onItemMouseOver,
}) {
  return (
    <div
      className={`list-item ${itemStyle}`}
      onClick={onItemClick}
      onMouseOver={onItemMouseOver}
    >
      <Icon iconName={icon} extra={iconStyle} />
      <span>{text}</span>
    </div>
  );
}

ListItem.propTypes = {
  onItemClick: PropTypes.func,
  onItemMouseOver: PropTypes.func,
  icon: PropTypes.string,
  itemStyle: PropTypes.string,
  text: PropTypes.string,
};

export default ListItem;
