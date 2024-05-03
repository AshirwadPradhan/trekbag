import { useState } from "react";
import Button from "./Button";

function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item cannot be empty");
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };

    setItems((p) => [...p, newItem]);
  };

  const handleChange = (e) => {
    setItemText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input type="text" value={itemText} onChange={handleChange} />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
