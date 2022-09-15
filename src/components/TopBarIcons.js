import Icon from "./../ui/Icon";

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
  return (
    <>
      <Icon extra="icon" iconName="user" onIconClick={HandleAccountIconClick} />
      <Icon
        extra="icon"
        iconName="shopping-cart"
        onIconClick={HandleCartIconClick}
      >
        <span className="items-number">25</span>
      </Icon>
      <Icon
        extra="icon"
        iconName="question"
        onIconClick={HandleQueryIconClick}
      />
    </>
  );
}

export default TopBarIcons;
