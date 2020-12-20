import { Row, Col } from "react-bootstrap";
import ItemList from "./ItemList";
import ItemAdder from "./ItemAdder";
import ItemButtons from "./ItemButtons";

const ListPanel = () => {
  return (
    <Row>
      <Col xs={12}>
        <h3>Available Options</h3>
      </Col>

      <Col xs={12}>
        <ItemAdder />
      </Col>

      <Col xs={12} className={"my-2"}>
        <ItemList />
      </Col>

      <Col xs={12}>
        <ItemButtons />
      </Col>
    </Row>
  );
};

export default ListPanel;
