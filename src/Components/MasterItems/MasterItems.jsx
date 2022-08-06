//React
import React from "react";
//React
//Images
//Images
//CSS
import styles from "./MasterItems.module.css";
//CSS
//Modules
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
//Modules

const MasterItems = () => {
  return (
    <div className={styles.masterItemsContainer}>
      <div className={styles.top}>
        <OwlCarousel
          className={styles.owlScrollContainer}
          loop
          dots
          lazyLoad
          merge={1}
          margin={0}
          items={1}
        >
          <div className="item" id={styles.item1}></div>
          <div className="item" id={styles.item2}></div>
          <div className="item" id={styles.item3}></div>
        </OwlCarousel>
        <div className={styles.littleItem}></div>
      </div>
      <div className={styles.bottom}>
        <Link to="/shop" className={styles.links} id={styles.firstItem}></Link>
        <Link to="/shop" className={styles.links} id={styles.secondItem}></Link>
        <Link to="/shop" className={styles.links} id={styles.thirdItem}></Link>
      </div>
    </div>
  );
};

export default MasterItems;
