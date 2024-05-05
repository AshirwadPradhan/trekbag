import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsContext } from "../lib/hooks";

function Sidebar() {
  const { onAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={onAddItem} />
      <ButtonGroup />
    </div>
  );
}

export default Sidebar;
