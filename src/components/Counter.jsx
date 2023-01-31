import Icon from "./../ui/Icon";
import "./Counter.css";
import Spinner from "./Spinner"

function Counter({count,onCountIncrease,onCountDecrease,updating}) {
  
  return (
    <div className="counter">

      <Icon
        iconName={"minus"}
        extra={"count-icon"}
        onIconClick={onCountDecrease}
      />

      <div className="count">
      {updating
             ?<Spinner/>
             :<span className="view" >{count}</span>
      }

      </div>
      <Icon
        iconName={"plus"}
        extra={"count-icon"}
        onIconClick={onCountIncrease}
      />
      
    </div>
  );
}

export default Counter;
