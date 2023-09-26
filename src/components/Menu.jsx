import { useEffect, useState } from "react";

import Icon from "@mdi/react";

import { mdiApplicationEdit, mdiContentPaste } from "@mdi/js";

import Button from "./Button";
import Card from "./Card";

import styles from "../styles/Menu.module.css";
import fruitColors from "../styles/FruitColors.module.css";

function Menu({ onActiveChanged }) {
  const [active, setActive] = useState("content");

  useEffect(() => {
    if (onActiveChanged) onActiveChanged(active);
  }, [onActiveChanged, active]);

  const getBg = (value) => {
    return active === value ? "bg-strawberry" : "bg-raspberry";
  };

  return (
    <Card className={styles["button-container"]}>
      <Button.Default
        onClick={setActive.bind(this, "content")}
        className={styles.button + " " + fruitColors[getBg("content")] + " " + fruitColors["text-egg"]}
      >
        <Icon path={mdiContentPaste} size={1} />
        <span>Content</span>
      </Button.Default>
      <Button.Default
        onClick={setActive.bind(this, "customize")}
        className={styles.button + " " + fruitColors[getBg("customize")] + " " + fruitColors["text-egg"]}
      >
        <Icon path={mdiApplicationEdit} size={1} />
        <span>Customize</span>
      </Button.Default>
    </Card>
  );
}

export default Menu;
