import {Col, Row, Button} from "react-bootstrap";
import {useContext, useRef} from "react";
import ItemsContext from "./ItemsContext";

const ItemButtons = () => {
  const {items, setItems, removeAllItems, randItem, saveItemListToLocalStorage} = useContext(ItemsContext);
  const fileInput = useRef(null);
  let fileReader;

  const saveOnClick = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(items)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "items.json";
    document.body.appendChild(element);
    element.click();
  };

  const uploadOnClick = () => {
    if (fileInput.current) fileInput.current.click();
  };

  const handleFileRead = () => {
    const content = fileReader.result;
    const restoredItems = JSON.parse(content);
    setItems(restoredItems);
  };

  const uploadOnChange = () => {
    if (fileInput.current && fileInput.current.files[0]) {
      const file = fileInput.current.files[0];
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };

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
        <Col>
          <Button variant={"outline-info"} block onClick={saveOnClick}>Download</Button>
        </Col>
        <Col>
          <input type={'file'} ref={fileInput} style={{display: 'none'}} accept={'.json'} onChange={uploadOnChange}/>
          <Button variant={"outline-info"} block onClick={uploadOnClick}>Upload</Button>
        </Col>
      </Row>
    </>
  );
};

export default ItemButtons;
