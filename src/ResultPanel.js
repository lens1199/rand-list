import { useContext } from "react";
import ItemsContext from "./ItemsContext";
import './ResultPanel.css';
import { Col, Row } from "react-bootstrap";

const ResultPanel = () => {
  const {items, randResult} = useContext(ItemsContext);
  const {value, index} = randResult;
  if (index === undefined || value === undefined || index >= items.length) return null;

  const item = items[index];
  const itemName = item.name;
  const regionStart = index > 0 ? items[index - 1].range : 0;
  const regionEnd = items[index].range;

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
            {index}
          </div>

          <div className={"body fullWidth"}>
            <div className={"itemSymbol"}>{itemSymbol}</div>
            <div className="itemName">{itemName}</div>
            <small className="resultText">{value}</small>
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
