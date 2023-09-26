import { useState, useRef, useEffect } from "react";

import Icon from "@mdi/react";
import { mdiChevronUp, mdiDelete, mdiPencil, mdiPlus } from "@mdi/js";

import vividColors from "../styles/VividColors.module.css";
import buttonStyles from "../styles/Button.module.css";

import { getClassName } from "../helpers/helper";

const Button = {
  Default: ({ children, noScaleOnClick = false, type, onClick, className, style }) => {
    return (
      <button
        className={getClassName(className, buttonStyles.button, noScaleOnClick ? "" : buttonStyles.scale)}
        style={style}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },

  Save: ({ children, noScaleOnClick = false, type, onClick, className, style }) => {
    return (
      <Button.Default
        className={getClassName(className, vividColors["bg-bluish-green"], vividColors["text-white"])}
        style={style}
        type={type}
        onClick={onClick}
        noScaleOnClick={noScaleOnClick}
      >
        {children}
      </Button.Default>
    );
  },

  Edit: ({ children, noScaleOnClick = false, type, onClick, className, style }) => {
    return (
      <Button.Default
        className={getClassName(className, buttonStyles["edit-button"], vividColors["bg-greenish-blue"], vividColors["text-white"])}
        style={style}
        type={type}
        onClick={onClick}
        noScaleOnClick={noScaleOnClick}
      >
        {<Icon path={mdiPencil} size={1} />}
        {children}
      </Button.Default>
    );
  },

  Delete: ({ children, noScaleOnClick = false, type, onClick, className, style }) => {
    return (
      <Button.Default
        className={getClassName(className, buttonStyles["edit-button"], vividColors["bg-reddish-orange"], vividColors["text-white"])}
        style={style}
        type={type}
        onClick={onClick}
        noScaleOnClick={noScaleOnClick}
      >
        {<Icon path={mdiDelete} size={1} />}
        {children}
      </Button.Default>
    );
  },

  Create: ({ children, noScaleOnClick = false, type, onClick, className, style }) => {
    return (
      <Button.Default
        className={getClassName(className, buttonStyles["edit-button"], vividColors["bg-blue"], vividColors["text-white"])}
        style={style}
        type={type}
        onClick={onClick}
        noScaleOnClick={noScaleOnClick}
      >
        {<Icon path={mdiPlus} size={1} />}
        {children}
      </Button.Default>
    );
  },

  Cancel: ({ children, noScaleOnClick = false, type, onClick, className, style }) => {
    return (
      <Button.Default
        className={getClassName(className, vividColors["bg-reddish-orange"], vividColors["text-white"])}
        style={style}
        type={type}
        onClick={onClick}
        noScaleOnClick={noScaleOnClick}
      >
        {children}
      </Button.Default>
    );
  },

  Collapse: ({ children, noScaleOnClick = false, onCollapseChanged, className, style, startCollapsed = false }) => {
    const [collapsed, setCollapsed] = useState(startCollapsed);
    const init = useRef(false);
    useEffect(() => {
      if (!init.current) {
        init.current = true;
        return;
      }
      if (onCollapseChanged) {
        onCollapseChanged(collapsed);
      }
    }, [collapsed]);

    const clickHandler = () => {
      setCollapsed((prevState) => !prevState);
    };

    return (
      <Button.Default
        className={getClassName(className, buttonStyles["collapse-button"], collapsed && buttonStyles.collapse)}
        style={style}
        type="button"
        onClick={clickHandler}
        noScaleOnClick={noScaleOnClick}
      >
        {children}
        {<Icon path={mdiChevronUp} size={1} className={buttonStyles.icon} />}
      </Button.Default>
    );
  },
};
export default Button;
