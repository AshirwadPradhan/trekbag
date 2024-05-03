function Counter({ total, numPacked }) {
  return (
    <p>
      <b>{numPacked}</b>/{total} items packed
    </p>
  );
}

export default Counter;
