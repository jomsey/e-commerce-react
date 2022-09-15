import Icon from "./Icon";
import "./ListItem.css";

function ListItem({ onItemClick, icon, text, iconStyle, itemStyle }) {
  return (
    <div className={`list-item ${itemStyle}`} onClick={onItemClick}>
      <Icon iconName={icon} extra={iconStyle} />
      <span>{text}</span>
    </div>
  );
}

export default ListItem;
