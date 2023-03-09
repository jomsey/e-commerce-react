import "./Billboard.css";
import BillboardItem from "./BillboardItem";

function Billboard({ items }) {
      return (
        <div className="billboard">
          {items.map((item) => (
                        <BillboardItem
                              image={item.posterImage}
                              key={item.id} />
          ))}
        </div>
      );
}

export default Billboard;
