import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle((istoggle) => !istoggle);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <AiOutlineTwitter />
          <span>LOGO</span>
        </div>

        <ul
          className={`${styles.navbar__menu} ${isToggle ? styles.active : ""}`}
        >
          <li>
            <span href="">Home</span>
          </li>
          <li>
            <span href="">Gallery</span>
          </li>
          <li>
            <span href="">Weddings</span>
          </li>
          <li>
            <span href="">FAQ</span>
          </li>
          <li>
            <span href="">Bookings</span>
          </li>
        </ul>

        <ul
          className={`${styles.navbar__icons} ${isToggle ? styles.active : ""}`}
        >
          <li>
            <AiOutlineTwitter />
          </li>
          <li>
            <AiOutlineTwitter />
          </li>
        </ul>

        <div href="" className={styles.toggleBtn} onClick={handleToggle}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
}
