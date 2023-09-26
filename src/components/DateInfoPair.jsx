import styles from "../styles/DateInfoPair.module.css";

function DateInfoPair({className, startDate, endDate, location, title, info, description }) {
  return (
    <div className={className + " " + styles["date-info-pair"]}>
      <div className={styles.date}>
        <div>{startDate}</div>
        <div>-</div>
        <div>{endDate}</div>
        <div>{location}</div>
      </div>
      <div className={styles.info}>
        <div>{title}</div>
        <div>{info}</div>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}

export default DateInfoPair;
