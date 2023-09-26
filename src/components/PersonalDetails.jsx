import { useState } from "react";

import { mdiAccount, mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js";

import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import Label from "./Label";

import styles from "../styles/PersonalDetails.module.css";
import Section from "./Section";
import Icon from "@mdi/react";
import { InputField } from "./InputField";
import { exists } from "../helpers/helper";

function PersonalDetails({ person, onSubmit, collapsed = false }) {
  const [edit, setEdit] = useState(false);

  const submitHandler = (data) => {
    if (onSubmit) onSubmit(data);
    setEdit(false);
  };

  return (
    <Section icon={{ path: mdiAccount, size: 1.75 }} title="Personal Details" collapsed={collapsed}>
      {(edit && <Edit formInit={person} onCancel={setEdit.bind(this, false)} onSubmit={submitHandler} />) || (
        <View onEdit={setEdit.bind(this, true)} person={person} />
      )}
    </Section>
  );
}

function View({ person, onEdit }) {
  let count = 0;

  return (
    <>
      <div className={styles.info}>
        {exists(person, "name") && ++count && (
          <div>
            <Icon path={mdiAccount} size={1} /> <span>{person.name}</span>
          </div>
        )}
        {exists(person, "email") && ++count && (
          <div>
            <Icon path={mdiEmail} size={1} /> <span>{person.email}</span>
          </div>
        )}
        {exists(person, "phone") && ++count && (
          <div>
            <Icon path={mdiPhone} size={1} /> <span>{person.phone}</span>
          </div>
        )}
        {exists(person, "address") && ++count && (
          <div>
            <Icon path={mdiMapMarker} size={1} /> <span>{person.address}</span>
          </div>
        )}
        {count === 0 && (
          <div className={styles.empty}>
            <h1>This looks empty...</h1>
            <Button.Edit onClick={onEdit}>Edit</Button.Edit>
          </div>
        )}
      </div>
      {count !== 0 && (
        <Button.Edit className={styles["edit-button"]} onClick={onEdit}>
          Edit
        </Button.Edit>
      )}
    </>
  );
}

function Edit({ onSubmit, onCancel, formInit }) {
  return (
    <Form initialValue={formInit} onSubmit={onSubmit}>
      <InputField>
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name"></Input>
      </InputField>
      <InputField>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email"></Input>
      </InputField>
      <InputField>
        <Label htmlFor="phone">Phone</Label>
        <Input type="tel" name="phone"></Input>
      </InputField>
      <InputField>
        <Label htmlFor="address">Address</Label>
        <Input type="text" name="address"></Input>
      </InputField>
      <div className={styles["buttons"]}>
        <Button.Cancel type="button" onClick={onCancel}>
          Cancel
        </Button.Cancel>
        <Button.Save type="submit">Save</Button.Save>
      </div>
    </Form>
  );
}

export default PersonalDetails;
