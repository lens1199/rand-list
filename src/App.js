import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemsContext from "./ItemsContext";
import React from "react";
import ListPanel from "./ListPanel";
import ResultPanel from "./ResultPanel";

const App = () => {
  const [itemList, setItemList] = useState([]);
  const [randResult, setRandResult] = useState({value: undefined, index: undefined});

  const addItem = (name, weight) => {
    itemList.push({name, weight});
    recalculateRange();
  };

  const removeItemByIndex = index => {
    itemList.splice(index, 1);
    recalculateRange();
  };

  const removeAllItems = () => {
    setItemList([]);
  };

  const recalculateRange = (updateItemList = true) => {
    const weightTotal = itemList.reduce((total, item) => total + item.weight, 0);
    itemList.forEach((item, index) => {
      item.normalizedWeight = item.range = item.weight / weightTotal;
      if (index) item.range += itemList[index - 1].range;
    });

    if (updateItemList) {
      setRandResult({value: undefined, index: undefined});
      setItemList([...itemList]);
    }
  };

  const randItem = () => {
    const value = Math.random();
    const index = itemList.findIndex(item => item.range >= value);
    setRandResult({value, index});
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
    setItems: setItemList,
    randResult,
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
