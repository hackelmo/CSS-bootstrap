import React, { useRef } from "react";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const width = 500;
  const container = useRef(null);

  const handleClick = (index) => {
    container.current.style.transform = `translate(-${index * width}px)`;
  };
  return (
    <section>
      <div
        style={{
          overflow: "hidden",
          width: width + "px",
        }}
      >
        <div ref={container} className={styles.container}>
          <div className={styles.inner}>
            <img src="https://www.shutterstock.com/image-photo/funny-red-welsh-corgi-pembroke-260nw-2042038094.jpg" />
          </div>
          <div className={styles.inner}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDX3Qn0sqkofsxpXIImPOGTg1BkdxlC7Ep4OFE_saT3xOplhzz_xEEruryVNMxMi6ffk&usqp=CAU" />
          </div>
          <div className={styles.inner}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ecw8awY4eKdE5hsFyIFbBgnRt3A-M8ySoTQeICa_HKBL2WTrXmdp3G7TMoVM20ya3ko&usqp=CAU" />
          </div>
        </div>
      </div>
      <div>
        {[1, 2, 3].map((el, i) => (
          <button key={i} onClick={() => handleClick(i)}>
            {el}
          </button>
        ))}
      </div>
    </section>
  );
}
