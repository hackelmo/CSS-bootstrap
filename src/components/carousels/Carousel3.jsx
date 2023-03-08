import React from "react";
import styles from "./Carousel3.module.css";

export default function Carousel3() {
  return (
    <div className={styles.slidebox}>
      <input type="radio" name="slide" id="slide01" defaultChecked />
      <input type="radio" name="slide" id="slide02" />
      <input type="radio" name="slide" id="slide03" />
      <input type="radio" name="slide" id="slide04" />
      <ul className={styles.slidelist}>
        <li className={styles.slideitem}>
          <div>
            <label htmlFor="slide04" className={styles.left}></label>
            <label htmlFor="slide02" className={styles.right}></label>
            <a>
              <img src="/images/prada1.webp" alt="a" />
            </a>
          </div>
        </li>
        <li className={styles.slideitem}>
          <div>
            <label htmlFor="slide01" className={styles.left}></label>
            <label htmlFor="slide03" className={styles.right}></label>
            <a>
              <img src="/images/prada3.webp" alt="a" />
            </a>
          </div>
        </li>
        <li className={styles.slideitem}>
          <div>
            <label htmlFor="slide02" className={styles.left}></label>
            <label htmlFor="slide04" className={styles.right}></label>
            <a>
              <img src="/images/prada4.webp" alt="a" />
            </a>
          </div>
        </li>
        <li className={styles.slideitem}>
          <div>
            <label htmlFor="slide03" className={styles.left}></label>
            <label htmlFor="slide01" className={styles.right}></label>
            <a>
              <img src="/images/prada1.webp" alt="a" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
