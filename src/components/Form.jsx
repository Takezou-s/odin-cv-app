import { useEffect, useRef } from "react";
import styles from "../styles/Form.module.css";
import Input from "./Input";
import { InputField } from "./InputField";
import Label from "./Label";
import Button from "./Button";

function Form({ onSubmit, children, initialValue }) {
  const formEl = useRef();

  useEffect(() => {
    if (formEl.current && initialValue) {
      for (const key in initialValue) {
        if (Object.hasOwnProperty.call(initialValue, key)) {
          const inputEl = formEl.current.querySelector(`[name=${key}]`);
          if (inputEl) inputEl.value = initialValue[key];
        }
      }
    }
  }, [initialValue]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (onSubmit) onSubmit(Object.fromEntries(new FormData(event.target).entries()), event);
  };

  return (
    <form ref={formEl} className={styles.form} onSubmit={submitHandler}>
      {children}
    </form>
  );
}

function getLabel(str) {
  const arr = Array.from(str);
  const decomposedArr = [];
  let character = arr.shift();
  while (arr.length > 0) {
    const nextCharacter = arr.shift();
    if (nextCharacter === nextCharacter.toUpperCase()) {
      decomposedArr.push(character);
      character = nextCharacter;
    } else {
      character += nextCharacter;
    }
    if (arr.length === 0) {
      decomposedArr.push(character);
    }
  }
  let result = decomposedArr.shift();
  result = result.slice(0, 1).toUpperCase() + result.slice(1) + " ";

  decomposedArr.forEach((x) => (result += x + " "));
  return result.trim();
}

export function GenerateForm({ fields = [], onSubmit, onCancel, formInit }) {
  const uniqueIdField = fields.find((x) => x.unique);

  return (
    <Form initialValue={formInit} onSubmit={onSubmit}>
      {formInit && uniqueIdField && <Input type="hidden" name={uniqueIdField.name} />}
      {fields.map((x) => {
        if (x.unique) return;
        return (
          <InputField key={x.name}>
            <Label htmlFor={x.name}>{x.label || getLabel(x.name)}</Label>
            <Input type={x.type || "text"} name={x.name} />
          </InputField>
        );
      })}
      <div className={styles.buttons}>
        <Button.Cancel type="button" onClick={onCancel}>
          Cancel
        </Button.Cancel>
        <Button.Save type="submit">Save</Button.Save>
      </div>
    </Form>
  );
}

export default Form;
