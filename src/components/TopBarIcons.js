import Icon from "./../ui/Icon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const cartNumber = useSelector(({ cartNumber }) => cartNumber.count);

  return (
    <>
      <Icon extra="icon" iconName="user" onIconClick={HandleAccountIconClick} />
      <Link to={"/cart"}>
        <Icon
          extra="icon"
          iconName="shopping-cart"
          onIconClick={HandleCartIconClick}
        >
          <span className="items-number">{cartNumber}</span>
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
