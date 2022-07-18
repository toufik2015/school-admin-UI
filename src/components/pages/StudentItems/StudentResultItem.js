import React from "react";
import AssignButton from "../../UI/Button/AssignButton";
import DetailsButton from "../../UI/Button/DetailsButton";
import DeleteButton from "../../UI/Button/DeleteButton";

import classes from "./StudentResultItem.module.css";

const StudentResultItem = (props) => {
  const { student } = props;
  const { firstName, lastName, phone, email, registrationDate } = student;

  const formatedResgisDate = new Date(registrationDate).toLocaleDateString();

  return (
    <tr className={classes["result-item"]}>
      <td>{firstName} </td>
      <td>{lastName} </td>
      <td>{phone} </td>
      <td>{email} </td>
      <td>{formatedResgisDate} </td>

      <td className={classes["group-btn"]}>
        <AssignButton />
        <DetailsButton />
        <DeleteButton itemId={student.id} onDelete={props.toggleModal} />
      </td>
    </tr>
  );
};

export default StudentResultItem;
