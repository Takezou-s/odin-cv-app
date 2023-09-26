import { useState } from "react";

const useCollapse = (content, value = false) => {
  const [col, setCol] = useState(value);

  const collapseHandler = (value) => {
    content.current.style.overflow = "hidden";
    if (value) {
      content.current.style.height = content.current.offsetHeight + "px";
      content.current.offsetHeight;
      content.current.style.height = "0";
    } else {
      content.current.style.display = "";
      content.current.style.height = "auto";
      content.current.offsetHeight;
      const offsetHeight = content.current.offsetHeight + "px";
      content.current.style.height = "0";
      content.current.offsetHeight;
      content.current.style.height = offsetHeight;
      content.current.offsetHeight;
    }
    setCol(value);
  };

  const transitionEndHandler = () => {
    content.current.style.display = col ? "none" : "";
    content.current.style.overflow = "";
    content.current.style.height = "";
  };

  return [collapseHandler, transitionEndHandler, col];
};

export default useCollapse;
