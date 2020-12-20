import { Col, Row, Button } from "react-bootstrap";
import { useContext } from "react";
import ItemsContext from "./ItemsContext";

const ItemButtons = () => {
  const {items, removeAllItems, randItem, saveItemListToLocalStorage} = useContext(ItemsContext);

  return (
    !!items.length &&
    <>
      <Row>
        <Col>
          <Button variant={"primary"} onClick={randItem} block>Generate</Button>
        </Col>
      </Row>

      <Row className={"mt-4"}>
        <Col>
          <Button variant={"outline-danger"} onClick={removeAllItems} block>Clear</Button>
        </Col>
        <Col>
          <Button variant={"outline-info"} onClick={saveItemListToLocalStorage} block>Save</Button>
        </Col>
      </Row>
    </>
  );
};

export default ItemButtons;
