import { useRef } from "react";

import useCollapse from "../hooks/useCollapse";

import Icon from "@mdi/react";

import Card from "./Card";
import Button from "./Button";

import styles from "../styles/Section.module.css";

// import { getClassName } from "../helpers/helper";

function Section({ children, title, icon, collapsed = false, className, style }) {
  const content = useRef();
  const [collapseHandler, transitionEndHandler] = useCollapse(content, collapsed);

  return (
    <Card className={className} style={style}>
      <Button.Collapse
        startCollapsed={collapsed}
        noScaleOnClick={true}
        className={`${styles["collapse-button"]}`}
        onCollapseChanged={collapseHandler}
      >
        <h2 className={styles.title}>
          {icon && icon.path && <Icon path={icon.path} size={icon.size || 1.5} />}
          {title}
        </h2>
      </Button.Collapse>
      <div
        onTransitionEnd={transitionEndHandler}
        className={styles.collapsable}
        ref={content}
        style={{ display: collapsed ? "none" : "" }}
      >
        {children}
      </div>
    </Card>
  );
}

export default Section;
