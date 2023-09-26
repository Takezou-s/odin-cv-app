import { useState } from "react";

const useRepository = (uniqueIdName, initValue = []) => {
  const [repo, setRepo] = useState(initValue);
  const addOrEditItem = (data) => {
    setRepo((prevState) => {
      const result = [...prevState];
      data[uniqueIdName] = data[uniqueIdName] || Math.random().toString();

      const index = result.findIndex((x) => x[uniqueIdName] === data[uniqueIdName]);
      if (index >= 0) {
        result.splice(index, 1, data);
      } else {
        result.push(data);
      }
      return result;
    });
  };

  const deleteItem = (id) => {
    setRepo((prevState) => {
      const result = [...prevState];
      const index = result.findIndex((x) => x[uniqueIdName] === id);
      if (index >= 0) {
        result.splice(index, 1);
      }
      return result;
    });
  };

  return [repo, addOrEditItem, deleteItem];
};

export default useRepository;
