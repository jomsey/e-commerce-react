import "./LinksGroup.css";
import Icon from "../ui/Icon";
import PropTypes from "prop-types";


function LinksGroup({ title, links, icons }) {
  return (
    <div className="links">
      {title && <h3>{title}</h3>}
      {links && (
        <ul>
          {links.map((link) => (
            <li key={link.name}>{link.name}</li>
          ))}
        </ul>
      )}
      {icons && (
        <div className="iconLinks">
          {icons.map((icon) => (
            <Icon
              key={icon.name}
              iconName={icon.name}
              extra={icon.extraClasses}
            />
          ))}
        </div>
      )}
    </div>
  );
}

LinksGroup.propTypes = {
  title: PropTypes.string,  
  links: PropTypes.array,
  icons: PropTypes.array,
};

export default LinksGroup;
