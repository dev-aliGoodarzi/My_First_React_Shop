//React
import React from "react";
//React
//Images
import { l1, l2, r1, r2, m1, b1 } from "../Image__ComponentExporter/Images";
//Images
//CSS
import styles from "./NewsetNews.module.css";
//CSS
//Modules
//Modules
//Contexts
//Contexts
//Refs
//Refs

const NewsetNews = () => {
  return (
    <div className={styles.newsetNewsContainer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={l1} alt="ax" />
          <img src={l2} alt="ax" />
        </div>
        <div className={styles.mid}>
          <img src={m1} alt="ax" />
        </div>
        <div className={styles.right}>
          <img src={r1} alt="ax" />
          <img src={r2} alt="ax" />
        </div>
      </div>
      <div className={styles.bottom}>
        <img src={b1} alt="ax" />
      </div>
    </div>
  );
};

export default NewsetNews;
