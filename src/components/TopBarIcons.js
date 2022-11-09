import Icon from "./../ui/Icon";
import { Link } from "react-router-dom";
import { ShopContext } from "../shop-context/ShopState";
import { useContext } from "react";

function HandleAccountIconClick() {
  console.log("AccountIconClicked");
}

function HandleCartIconClick() {
  console.log("CartIconClicked");
}

function HandleQueryIconClick() {
  console.log("QueryIconClicked");
}

function TopBarIcons() {
  let { cartNumber } = useContext(ShopContext);

  return (
    <>
      <Icon extra="icon" iconName="user" onIconClick={HandleAccountIconClick} />
      <Link to={"/cart"}>
        <Icon
          extra="icon"
          iconName="shopping-cart"
          onIconClick={HandleCartIconClick}
        >
          {cartNumber>0 && <span className="items-number">{cartNumber }</span>}
        </Icon>
      </Link>
      <Icon
        extra="icon"
        iconName="question"
        onIconClick={HandleQueryIconClick}
      />
    </>
  );
}

export default TopBarIcons;
