import { useState } from "react";
import Icon from "./../ui/Icon";
import "./Counter.css";

function Counter() {
  let [count, setCount] = useState(1);

  const increaseCount = () => {
    count < 11 ? setCount(count++) : setCount(10);
  };

  const decreaseCount = () => {
    count > 1 ? setCount(count--) : setCount(1);
  };


  return (
    <div className="counter">

      <Icon
        iconName={"minus"}
        extra={"count-icon"}
        onIconClick={decreaseCount}
      />

      <span className="view">{count}</span>

      <Icon
        iconName={"plus"}
        extra={"count-icon"}
        onIconClick={increaseCount}
      />
      
    </div>
  );
}

export default Counter;
