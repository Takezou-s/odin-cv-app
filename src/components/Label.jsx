import styles from "../styles/Label.module.css";

function Label({ htmlFor, children }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
