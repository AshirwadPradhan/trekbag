import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsContext } from "../lib/hooks";

function Sidebar() {
  const { handleAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}

export default Sidebar;
