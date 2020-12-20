import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useContext, useState } from "react";
import ItemsContext from "./ItemsContext";

const ItemAdder = () => {
  const {addItem} = useContext(ItemsContext);
  const [itemName, setItemName] = useState('');
  const [itemWeight, setItemWeight] = useState(1);

  const addItemToList = () => {
    if (itemName){
      addItem(itemName, itemWeight);
      setItemName("");
      setItemWeight(1);
    }
  };

  const handleNameChange = e => {
    setItemName(e.target.value);
  };

  const handleWeightChange = e => {
    setItemWeight(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      addItemToList();
    }
  };

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <Button onClick={addItemToList}>
          Add
        </Button>
      </InputGroup.Prepend>

      <FormControl
        type={"text"}
        placeholder={"Name"}
        value={itemName}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />

      <FormControl
        type={"number"}
        placeholder={"Weight"}
        value={itemWeight}
        onChange={handleWeightChange}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  );
};

export default ItemAdder;
