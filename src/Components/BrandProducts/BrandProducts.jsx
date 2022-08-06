//React
import React from "react";
//React
//Images
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
} from "../Image__ComponentExporter/Images";
//Images
//CSS
import styles from "./BrandProducts.module.css";
//CSS
//Modules
//Modules
//Components
import HelperLine from "../HelperLine/HelperLine";
//Components
//Contexts
//Contexts
//Refs
//Refs
//States
//States
//Methods
//Methods

const BrandProducts = () => {
  const brandData = [
    { id: "enernity", image: brand1 },
    { id: "inlay", image: brand2 },
    { id: "farmasi", image: brand3 },
    { id: "essensce", image: brand4 },
    { id: "boujois", image: brand5 },
    { id: "yves rocher", image: brand6 },
    { id: "garnigr", image: brand7 },
    { id: "deborah", image: brand8 },
  ];
  return (
    <div className={styles.brandProductsContainer}>
      <HelperLine inLineText="برند های محصولات" />
      <div className={styles.imagesContainer}>
        {brandData.map((item) => {
          return (
            <img
              key={item.id}
              className={styles.images}
              src={item.image}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrandProducts;
