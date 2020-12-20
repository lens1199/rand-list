import { useContext } from "react";
import ItemsContext from "./ItemsContext";
import "./ItemList.css";
import { ListGroup } from "react-bootstrap";

const ItemList = () => {
  const {items, removeItemByIndex} = useContext(ItemsContext);

  const itemElements = items.map((item, index) =>
    <ListGroup.Item key={index} className={"itemContainer"}>
      <div>
        <button className={"closeButton"} onClick={() => {
          removeItemByIndex(index);
        }}>
          ×
        </button>
        <small className={"mr-2"}>{index}: </small>
        {item.name}
      </div>
      <span className={"randRange"}>~{item.range.toFixed(3)}</span>
      <small>{item.weight} weight ({item.normalizedWeight.toFixed(3)})</small>
    </ListGroup.Item>
  );

  return (
    <ListGroup>
      {itemElements}
    </ListGroup>
  );
};

export default ItemList;
