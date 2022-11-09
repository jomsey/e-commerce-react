import Icon from "./../ui/Icon";
import "./Counter.css";

function Counter({count,onCountIncrease,onCountDecrease}) {
  
  return (
    <div className="counter">

      <Icon
        iconName={"minus"}
        extra={"count-icon"}
        onIconClick={onCountDecrease}
      />

      <span className="view" >{count}</span>

      <Icon
        iconName={"plus"}
        extra={"count-icon"}
        onIconClick={onCountIncrease}
      />
      
    </div>
  );
}

export default Counter;
