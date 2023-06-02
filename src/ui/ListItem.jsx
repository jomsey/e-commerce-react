import Icon from "./Icon";
import "./ListItem.css";
import PropTypes from "prop-types";


function ListItem({onItemClick,icon,text,iconStyle,
                   itemStyle,isActive,handleMouseOut,handleMouseOver}) {
  
  return (
    <div  className={isActive?`list-item ${itemStyle} active`:`list-item ${itemStyle}`}
          onClick={(link)=>onItemClick(link)}
          onMouseOver={(link)=>handleMouseOver(link)}
          onMouseOut={handleMouseOut}
    >
      {icon && <Icon iconName={icon} extra={iconStyle}/>}
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
         isActive:PropTypes.bool
};

export default ListItem;
