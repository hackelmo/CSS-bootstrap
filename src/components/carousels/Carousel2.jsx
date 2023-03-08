import React from "react";
import styles from "./Carousel2.module.css";

export default function Carousel2() {
  return (
    <div className={styles.section}>
      <input type="radio" name="slide" id="slide01" defaultChecked />
      <input type="radio" name="slide" id="slide02" />
      <input type="radio" name="slide" id="slide03" />

      <div className={styles.slidewrap}>
        <ul className={styles.slidelist}>
          <li>
            <div>
              <img src="/images/prada1.webp" alt="pic1" width={100} />
            </div>
          </li>
          <li>
            <div>
              <img src="/images/prada3.webp" alt="pic2" width={100} />
            </div>
          </li>
          <li>
            <div>
              <img src="/images/prada4.webp" alt="pic3" width={100} />
            </div>
          </li>
          <div className={styles.slideControl}>
            <div className={styles.control01}>
              <label htmlFor="slide03" className={styles.left}></label>
              <label htmlFor="slide02" className={styles.right}></label>{" "}
            </div>
            <div className={styles.control02}>
              <label htmlFor="slide01" className={styles.left}></label>
              <label htmlFor="slide03" className={styles.right}></label>
            </div>
            <div className={styles.control03}>
              <label htmlFor="slide02" className={styles.left}></label>
              <label htmlFor="slide01" className={styles.right}></label>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
