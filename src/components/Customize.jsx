import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

import styles from "../styles/Customize.module.css";

function Customize({ personBg, setPersonBg, personFg, setPersonFg, pos, setPos }) {
  return (
    <div className={styles.container}>
      <Card>
        <h1>Layout</h1>
        <div className={styles["customize-buttons"]}>
          <Button.Default className={styles["customize-button"]} onClick={setPos.bind(this, "top")}>
            <div className={pos === "top" && styles.active || ""}>
              <div style={{ backgroundColor: personBg }}></div>
              <div></div>
            </div>
            <span>Top</span>
          </Button.Default>
          <Button.Default className={styles["customize-button"] + " " + styles.horizontal} onClick={setPos.bind(this, "left")}>
            <div className={pos === "left" && styles.active || ""}>
              <div style={{ backgroundColor: personBg }}></div>
              <div></div>
            </div>
            <span>Left</span>
          </Button.Default>
          <Button.Default
            className={styles["customize-button"] + " " + styles.horizontal + " " + styles.right}
            onClick={setPos.bind(this, "right")}
          >
            <div className={pos === "right" && styles.active || ""}>
              <div style={{ backgroundColor: personBg }}></div>
              <div></div>
            </div>
            <span>Right</span>
          </Button.Default>
        </div>
      </Card>
      <Card>
        <h1>Color</h1>
        <div className={styles["color-fields"]}>
          <div className={styles["color-field"]}>
            <span>Background</span>
            <span className={styles.input}>
              <Input type="color" attr={{ value: personBg, onInput: (ev) => setPersonBg(ev.target.value) }} />
            </span>
          </div>
          <div className={styles["color-field"]}>
            <span>Foreground</span>
            <span className={styles.input}>
              <Input type="color" attr={{ value: personFg, onInput: (ev) => setPersonFg(ev.target.value) }} />
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Customize;
