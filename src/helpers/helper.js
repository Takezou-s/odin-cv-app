export function getClassName(...classes) {
  let result = "";
  if (classes && classes.length > 0) {
    classes.forEach((x) => {
      if (x) {
        result += x + " ";
      }
    });
  }
  return result.trim();
}

export function exists(obj, prop) {
  return obj && obj[prop];
}
