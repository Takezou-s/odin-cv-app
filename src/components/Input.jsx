import styles from "../styles/Input.module.css";

function Input({ type, name, placeholder, rows, attr }) {
  return (
    <>
      {(type === "textarea" && <textarea {...attr} className={styles.input} rows={rows} id={name} name={name} placeholder={placeholder} />) || (
        <input {...attr} className={styles.input} type={type || "text"} id={name} name={name} placeholder={placeholder} />
      )}
    </>
  );
}

export default Input;
