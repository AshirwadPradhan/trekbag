import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsContext } from "../lib/hooks";

function Header() {
  const { items, numPacked } = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter total={items.length} numPacked={numPacked()} />
    </header>
  );
}

export default Header;
