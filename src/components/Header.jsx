import Counter from "./Counter";
import Logo from "./Logo";
import { useItemStore } from "../stores/itemsStore";

function Header() {
  const items = useItemStore((state) => state.items);
  const numPacked = () => {
    const packedItems = items.filter((item) => {
      return item.packed;
    });
    return packedItems.length;
  };

  return (
    <header>
      <Logo />
      <Counter total={items.length} numPacked={numPacked()} />
    </header>
  );
}

export default Header;
