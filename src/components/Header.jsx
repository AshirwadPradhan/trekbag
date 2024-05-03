import Counter from "./Counter";
import Logo from "./Logo";

function Header({ total, numPacked }) {
  return (
    <header>
      <Logo />
      <Counter total={total} numPacked={numPacked} />
    </header>
  );
}

export default Header;
