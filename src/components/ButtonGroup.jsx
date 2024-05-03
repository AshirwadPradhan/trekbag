import Button from "./Button";

const buttonLabels = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all item",
];
function ButtonGroup() {
  return (
    <section className="button-group">
      {buttonLabels.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}

export default ButtonGroup;
