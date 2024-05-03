import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item cannot be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setItemText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={handleChange}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
