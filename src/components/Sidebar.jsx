import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
      />
    </div>
  );
}

export default Sidebar;
