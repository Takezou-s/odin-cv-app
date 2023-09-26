import DateInfoPair from "./DateInfoPair";

import styles from "../styles/PreviewSection.module.css";

function PreviewSection({ className, bg, fg, title, list, propertyMappings }) {
  const getProp = (obj, propName) => {
    if (obj) {
      if (propertyMappings && propertyMappings[propName]) {
        const result = {};
        result[propName] = obj[propertyMappings[propName]];
        return result;
      }
      if (obj[propName]) {
        const result = {};
        result[propName] = obj[propName];
        return result;
      }
    }
  };
  if (!list || list.length <= 0) {
    return <></>;
  }
  return (
    <div className={className}>
      <h2 className={styles.title} style={{ backgroundColor: bg, color: fg }}>
        {title}
      </h2>
      <div>
        {list.map((x) => {
          return (
            <DateInfoPair
              className={styles["date-info-pair"]}
              key={x[propertyMappings.key]}
              {...getProp(x, "startDate")}
              {...getProp(x, "endDate")}
              {...getProp(x, "location")}
              {...getProp(x, "title")}
              {...getProp(x, "info")}
              {...getProp(x, "description")}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PreviewSection;
