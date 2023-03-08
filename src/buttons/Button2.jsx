import React from "react";
import styles from "./Button2.module.css";

export default function Button2({ children }) {
  return (
    <div className={[styles.btnThree, styles.btn].join(" ")}>
      <span>{children}</span>
    </div>
  );
}
