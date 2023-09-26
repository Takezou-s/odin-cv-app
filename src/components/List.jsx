import { useReducer } from "react";

import Button from "./Button";

import styles from "../styles/List.module.css";
import { GenerateForm } from "./Form";

const reducer = (state, action) => {
  switch (action.type) {
    case "HIDE_FORM":
      return { showForm: false, objToEdit: null };
    case "CREATE_NEW":
      return { showForm: true, objToEdit: null };
    case "EDIT":
      return { showForm: true, objToEdit: action.payload };
    default:
      return state;
  }
};

function List({ list, onSubmit, onDelete, itemPropertyName, buttonText, fields }) {
  const [state, dispatch] = useReducer(reducer, { showForm: false, objToEdit: null });
  const submitHandler = (data) => {
    if (onSubmit) onSubmit(data);
    dispatch({ type: "HIDE_FORM" });
  };

  return (
    <>
      {!state.showForm &&
        list &&
        list.map((x) => (
          <div key={x.id} className={styles.item}>
            <span>{x[itemPropertyName]}</span>
            <Button.Edit onClick={dispatch.bind(this, { type: "EDIT", payload: x })} />
            <Button.Delete onClick={onDelete.bind(this, x.id)} />
          </div>
        ))}
      {!state.showForm && (
        <Button.Create className={styles.button} onClick={dispatch.bind(this, { type: "CREATE_NEW" })}>
          {buttonText}
        </Button.Create>
      )}
      {state.showForm && (
        <GenerateForm
          fields={fields}
          onSubmit={submitHandler}
          onCancel={dispatch.bind(this, { type: "HIDE_FORM" })}
          formInit={state.objToEdit}
        />
      )}
    </>
  );
}

export default List;
