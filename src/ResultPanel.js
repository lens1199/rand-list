import { useContext } from "react";
import ItemsContext from "./ItemsContext";
import './ResultPanel.css';
import { Col, Row } from "react-bootstrap";

const ResultPanel = () => {
  const {items, result, itemIndex} = useContext(ItemsContext);
  if (itemIndex === undefined || itemIndex >= items.length) return null;

  const item = items[itemIndex];
  const itemName = item.name;
  const regionStart = itemIndex > 0 ? items[itemIndex - 1].range : 0;
  const regionEnd = items[itemIndex].range;

  let itemSymbol = itemName[0].toUpperCase();
  if (itemName.length > 1) itemSymbol += itemName[1].toLowerCase();

  return (
    <Row>
      <Col xs={12}>
        <h3>Result</h3>
      </Col>

      <Col xs={12}>
        <div className={"resultContainer"}>
          <div className={"top fullwidth"}>
            {itemIndex}
          </div>

          <div className={"body fullWidth"}>
            <div className={"itemSymbol"}>{itemSymbol}</div>
            <div className="itemName">{itemName}</div>
            <small className="resultText">{result}</small>
          </div>

          <div className="bottom fullWidth">
            <span>{regionStart.toFixed(6)}</span>
            <span>{regionEnd.toFixed(6)}</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ResultPanel;
