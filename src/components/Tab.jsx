function Tab({ name, active, children }) {
  return <>{name === active && children}</>;
}

export default Tab;
