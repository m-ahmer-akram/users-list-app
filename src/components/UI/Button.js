import React from "react";
import styles from "./Button.module.scss";

export const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onCick}
    >
      {props.children}
    </button>
  );
};
