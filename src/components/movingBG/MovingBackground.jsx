import React from "react";
import styles from "./MovingBackground.module.css";

export default function MovingBackground() {
  return (
    <div className={styles.movewrap}>
      <div style={{ border: "3px solid black" }}>
        <div className={styles.moving}>
          <div className={styles.bikeicon}>
            <img src="/images/bike.png" />
            <img
              src="/images/tire.png"
              className={[styles.tire01, styles.tireRotate].join(" ")}
            />
            <img
              src="/images/tire.png"
              className={[styles.tire02, styles.tireRotate].join(" ")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
