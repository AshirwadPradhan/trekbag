import Button from "./Button";

function AddItemForm() {
  return (
    <form>
      <h2>Add an Item</h2>
      <input type="text" />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
