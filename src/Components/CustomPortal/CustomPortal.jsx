//React
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
//React
//Images
//Images
//CSS
import styles from "./CustomPortal.module.css";
//CSS
//Modules
//Modules
//Contexts
//Contexts
//Refs
const portalItemRef = React.createRef();
//Refs

const CustomPortal = ({ portalDataObj, isActive, setIsActive }) => {
  // DATA
  const { name, price, image } = portalDataObj;
  // DATA
  // STATE
  const [widthOfPortalItem, setwidthOfPortalItem] = useState(0);
  const [heightOfPortalItem, setHeightOfPortalItem] = useState(0);
  // STATE
  //   LIFE CYCLES
  useEffect(() => {
    setTimeout(() => {
      setHeightOfPortalItem("40vh");
    }, 500);
    setTimeout(() => {
      setwidthOfPortalItem("60vw");
    }, 300);
  }, []);

  //   LIFE CYCLES
  return (
    <>
      {isActive ? (
        <div
          ref={portalItemRef}
          className={`${styles.customPortalContainer} ${
            isActive ? styles.active : styles.hide
          }`}
          onClick={() => {
            setHeightOfPortalItem("00vh");
            setwidthOfPortalItem("00vw");
            setTimeout(() => {
              setIsActive(false);
            }, 600);
          }}
        >
          <div
            className={styles.portalItems}
            style={{ width: widthOfPortalItem, height: heightOfPortalItem }}
            onMouseEnter={() => {
              setwidthOfPortalItem("65vw");
              setHeightOfPortalItem("45vh");
            }}
            onMouseLeave={() => {
              setwidthOfPortalItem("60vw");
              setHeightOfPortalItem("40vh");
            }}
          >
            <div className={styles.leftItems}>
              <img src={image} alt="" />
            </div>
            <div className={styles.rightItems}>
              <p>نام کالا : {name}</p>
              <p>قیمت : {price}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CustomPortal;
