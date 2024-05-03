import { buttonLabels } from "../lib/constants";
import Button from "./Button";

function ButtonGroup({ handleRemoveAllItems, handleResetToInitial }) {
  return (
    <section className="button-group">
      <Button
        buttonType="secondary"
        handleRemoveAllItems={handleRemoveAllItems}
      >
        Mark all as complete
      </Button>
      <Button
        buttonType="secondary"
        handleRemoveAllItems={handleRemoveAllItems}
      >
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
