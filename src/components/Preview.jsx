import Card from "./Card";

import PreviewPersonal from "./PreviewPersonal";
import PreviewSection from "./PreviewSection";

import styles from "../styles/Preview.module.css";

function Preview({ bg, fg, pos, person, educations, experiences }) {
  const getClassNameForPos = () => {
    let result = "";
    if (pos !== "top") {
      result += ` ${styles.horizontal}`;
    }
    if (pos === "right") {
      result += ` ${styles.right}`;
    }
    return result;
  };
  return (
    <Card className={styles.preview + getClassNameForPos()}>
      <div style={{ backgroundColor: bg, color: fg }}>
        <PreviewPersonal person={person} pos={pos} />
      </div>
      <div>
        <PreviewSection
          className={styles.section + " " + ((pos !== "top" && styles.horizontal) || "")}
          bg={bg}
          fg={fg}
          title={"Education"}
          list={educations}
          propertyMappings={{
            title: "schoolName",
            info: "degree",
            key: "id",
          }}
        />
        <PreviewSection
          className={styles.section + " " + ((pos !== "top" && styles.horizontal) || "")}
          bg={bg}
          fg={fg}
          title={"Experience"}
          list={experiences}
          propertyMappings={{
            title: "company",
            info: "title",
            key: "id",
          }}
        />
      </div>
    </Card>
  );
}

export default Preview;
