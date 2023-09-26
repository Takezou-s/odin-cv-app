import styles from "../styles/Card.module.css";

import { getClassName } from "../helpers/helper";

function Card({ children, className = "", style }) {
  style = style || {};

  return (
    <div className={getClassName(className, styles.card)} style={style}>
      {children}
    </div>
  );
}

export default Card;
