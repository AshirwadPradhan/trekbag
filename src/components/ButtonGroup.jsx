import { buttonLabels } from "../lib/constants";
import Button from "./Button";

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
