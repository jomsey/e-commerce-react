function Icon({ onIconClick, iconName, extra, children }) {
          return (
              <i
                onClick={onIconClick}
                className={`fa fa-${iconName} ${extra}`}
                aria-hidden="true"
              >
              {children}
            </i>
          );
}

export default Icon;
