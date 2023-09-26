import Icon from "@mdi/react";

import { mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js";

import { exists } from "../helpers/helper";

import styles from "../styles/PreviewPersonal.module.css";

function PreviewPersonal({ person, pos }) {
  return (
    <>
      {exists(person, "name") && <h1 className={styles.name + " " + ((pos !== "top" && styles.horizontal) || "")}>{person.name}</h1>}
      <div className={styles.info + " " + ((pos !== "top" && styles.horizontal) || "")}>
        {exists(person, "email") && (
          <div>
            <Icon path={mdiEmail} size={1} /> <span>{person.email}</span>
          </div>
        )}
        {exists(person, "phone") && (
          <div>
            <Icon path={mdiPhone} size={1} /> <span>{person.phone}</span>
          </div>
        )}
        {exists(person, "address") && (
          <div>
            <Icon path={mdiMapMarker} size={1} /> <span>{person.address}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default PreviewPersonal;
