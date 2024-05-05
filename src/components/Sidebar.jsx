import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsContext } from "../lib/hooks";
import { useItemStore } from "../stores/itemsStore";

function Sidebar() {
  const handleAddItem = useItemStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}

export default Sidebar;
