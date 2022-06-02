import React from "react";
import styles from "./UsersList.module.scss";
import { Card } from "../UI/Card";

export const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card className={styles.users}>
        <ul>
          <li>No Users To Display</li>
        </ul>
      </Card>
    );
  }

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
