import React from "react";
import styles from "./Button1.module.css";

export default function Button1({ children }) {
  return (
    <button className={styles.button}>
      <span>{children}</span>
    </button>
  );
}
