//React
import React from "react";
//React
//Images
//Images
//CSS
import styles from "./HelperLine.module.css";
//CSS
//Modules
//Modules
//Contexts
//Contexts
//Refs
//Refs

const HelperLine = ({ inLineText }) => {
  return (
    <div className={styles.helperLineContainer}>
      <p className={styles.pTag}>{inLineText}</p>
    </div>
  );
};

export default HelperLine;
