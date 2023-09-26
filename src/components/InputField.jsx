import styles from "../styles/InputField.module.css";

export function InputField({ children }) {
  return <div className={styles["input-field"]}>{children}</div>;
}
