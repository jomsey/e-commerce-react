import "./BillboardItem.css";
function handleItemClick() {
  console.log("clicked");
}

function BillboardItem({ image }) {
  return (
    <div onClick={handleItemClick} className="billboard-item">
      <img src={image} alt="........." />
    </div>
  );
}

export default BillboardItem;
