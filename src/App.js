import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemsContext from "./ItemsContext";
import React from "react";
import ListPanel from "./ListPanel";
import ResultPanel from "./ResultPanel";
import { copyObject } from "./utils";

const App = () => {
  const [itemList, setItemList] = useState([]);
  const [result, setResult] = useState(undefined);
  const [itemIndex, setItemIndex] = useState(undefined);

  const addItem = (name, weight) => {
    itemList.push({name, weight});
    setItemList(itemList);
    recalculateRange();
    resetResult();
  };

  const removeItemByIndex = index => {
    itemList.splice(index, 1);
    setItemList(itemList);
    recalculateRange();
    resetResult();
  };

  const removeAllItems = () => {
    setItemList([]);
    resetResult();
  };

  const randItem = () => {
    const result = Math.random();
    setResult(result);
    let index = 0;
    for (; index < itemList.length && result > itemList[index].range; index++) {
    }
    setItemIndex(index);
  };

  const resetResult = () => {
    setResult(undefined);
    setItemIndex(undefined);
  };

  const recalculateRange = () => {
    const weightTotal = itemList.reduce((a, b) => a + b.weight, 0);
    const newItemList = copyObject(itemList);
    newItemList.forEach((item, index) => {
      item.normalizedWeight = item.weight / weightTotal;
      item.range = index ? item.normalizedWeight + newItemList[index - 1].range : item.normalizedWeight;
    });
    setItemList(newItemList);
  };

  const saveItemListToLocalStorage = () => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  };

  useEffect(() => {
    const storedItemList = JSON.parse(localStorage.getItem('itemList'));
    if (storedItemList) setItemList(storedItemList);
  }, []);

  const context = {
    items: itemList,
    result,
    itemIndex,
    addItem,
    removeItemByIndex,
    removeAllItems,
    randItem,
    saveItemListToLocalStorage
  };

  return (
    <ItemsContext.Provider value={context}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <ListPanel />
          </Col>

          <Col>
            <ResultPanel />
          </Col>
        </Row>
      </Container>
    </ItemsContext.Provider>
  );
};

export default App;
