//React
import React from "react";
//React
//Images
import {
  womenSuggest1,
  womenSuggest2,
  womenSuggest3,
  womenSuggest4,
  womenSuggest5,
  womenSuggest6,
  womenSuggest7,
  womenSuggest8,
} from "../Image__ComponentExporter/Images";

import { AiFillHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
//Images
//CSS
import styles from "./WomenSuggest.module.css";
//CSS
//Modules
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
//Modules

//CONTEXTS IMPORT
import {
  CartItemsContextDispacher,
  LikedItemsContext,
} from "../Contexts/Contexts";
import { LikedItemsContextDispacher } from "../Contexts/Contexts";
import { SharedItemsContextDispacher } from "../Contexts/Contexts";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CustomPortal from "../CustomPortal/CustomPortal";
import { Fade } from "react-reveal";

const WomenSuggest = () => {
  //CONTEXTS IMPORT
  const cartItemsDispacher = useContext(CartItemsContextDispacher);
  const likedItemsDispacher = useContext(LikedItemsContextDispacher);
  const sharedItems = useContext(SharedItemsContextDispacher);
  const likedItems = useContext(LikedItemsContext);
  const [innerButtonText, setinnerButtonText] = useState("افرودن به سبد خرید");
  //CONTEXTS IMPORT
  // STATES
  const [isPortalActive, setIsPortalActive] = useState(false);
  const [portalData, setPortalData] = useState({
    name: "",
    price: "",
    image: "",
  });
  // STATES
  // Metthods
  const UNIQUE__KEY__MAKER = (itemForLoop) => {
    const unqiueKey = `${
      itemForLoop.id
    } ${date.getDate()} __ -- __ ${date.getMilliseconds()} __ -- __ ${
      Math.random() * 10000
    } `;
    return unqiueKey;
  };
  // Metthods
  // LifeCycles
  useEffect(() => {
    ReactTooltip.rebuild();
  });
  // LifeCycles
  // DATA
  const date = new Date();
  const products = [
    {
      id: 1,
      name: "عطر کریستال",
      price: 150000,
      image: womenSuggest1,
      discount: 20,
    },
    {
      id: 2,
      name: "شامپو آرگان",
      price: 100000,
      image: womenSuggest2,
      discount: 0,
    },
    {
      id: 3,
      name: "ریمل حجم دهنده",
      price: 100000,
      image: womenSuggest3,
      discount: 0,
    },
    {
      id: 4,
      name: "رژگونه مای",
      price: 100000,
      image: womenSuggest4,
      discount: 0,
    },
    {
      id: 5,
      name: "کرم وازلین کامان",
      price: 100000,
      image: womenSuggest5,
      discount: 0,
    },
    {
      id: 6,
      name: "کرم موس میبلین",
      price: 100000,
      image: womenSuggest6,
      discount: 0,
    },
    {
      id: 7,
      name: "کرم ضد چروک",
      price: 100000,
      image: womenSuggest7,
      discount: 0,
    },
    {
      id: 8,
      name: "کرم پودر کالیستا",
      price: 100000,
      image: womenSuggest8,
      discount: 0,
    },
  ];
  // DATA
  return (
    <div className={styles.womenContainerMaster}>
      {isPortalActive ? (
        <CustomPortal
          portalDataObj={portalData}
          isActive={isPortalActive}
          setIsActive={setIsPortalActive}
        />
      ) : null}
      <ReactTooltip />
      <Link to="/women-suggest" className={styles.anchor}>
        <svg
          id="nc_icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 30 30"
          data-type="glyph"
          data-name="woman-24"
          className={styles.womenIcon}
        >
          <g fill="currentColor">
            <path
              fill="currentColor"
              d="M20.728,18.432L15,17v-1.235c2.073-0.323,4.541-1.072,6-2.765 c-1.25-0.875-3-3.167-3-7c0-3.314-2.686-6-6-6S6,2.686,6,6c0,3.833-1.75,6.125-3,7c1.459,1.693,3.927,2.442,6,2.765V17l-5.728,1.432 C1.937,18.766,1,19.966,1,21.342V24h22v-2.658C23,19.966,22.063,18.766,20.728,18.432z"
            ></path>
          </g>
        </svg>
        پیشنهاد بانوان
      </Link>
      <div className={styles.womenSuggestItemContainer}>
        {products.map((item) => {
          return (
            <Fade left>
              <div key={item.id} className={styles.productItem}>
                <img src={item.image} alt={`${item.name}pic`} />
                <div className={styles.bottomAboutContent}>
                  <p className={styles.nameContainer}> {item.name}</p>
                  <p className={styles.priceContainer}>
                    <span>تومان</span>{" "}
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
                <div
                  // to={`/${item.id}`}
                  className={styles.absoluteItemsContainer}
                >
                  <div className={styles.left}>
                    <div
                      className={styles.icons}
                      data-tip={"افزودن به لیست اشتراک گذاری"}
                      onClick={() => {
                        sharedItems((prevState) => {
                          return [
                            ...prevState,
                            { ...item, key: UNIQUE__KEY__MAKER(item) },
                          ];
                        });
                      }}
                    >
                      <BsFillShareFill />
                    </div>
                    <div
                      className={styles.icons}
                      data-tip={"دیدن مشخصات کامل"}
                      onClick={() => {
                        setPortalData(item);
                        setIsPortalActive(true);
                        return;
                      }}
                    >
                      <GiMagnifyingGlass />
                    </div>
                    <div
                      className={styles.icons}
                      data-tip={
                        likedItems.findIndex((indexItem) => {
                          return item.id === indexItem.id;
                        }) > -1
                          ? "حدف از لیست علاقه مندی ها"
                          : "افزودن به لیست علاقه مندی ها"
                      }
                      onClick={() => {
                        if (
                          likedItems.findIndex((indexItem) => {
                            return item.id === indexItem.id;
                          }) > -1
                        ) {
                          const copyOfLikedState = [...likedItems];
                          const filterdItems = copyOfLikedState.filter(
                            (filterdItem) => {
                              return filterdItem.id !== item.id;
                            }
                          );
                          likedItemsDispacher(filterdItems);
                          return;
                        } else {
                          likedItemsDispacher((prevState) => {
                            return [
                              ...prevState,
                              { ...item, key: UNIQUE__KEY__MAKER(item) },
                            ];
                          });
                        }
                      }}
                    >
                      <AiFillHeart
                        stroke="black"
                        fillOpacity={
                          likedItems.findIndex((indexItem) => {
                            return item.id === indexItem.id;
                          }) > -1
                            ? "1"
                            : 0.5
                        }
                        id="test"
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                  <button
                    className={styles.bottomButton}
                    data-tip={`
                  نام کالا : ${item.name}
                  **
                  قیمت : ${item.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                    تومان
                  `}
                    onClick={() => {
                      cartItemsDispacher((prevState) => {
                        return [
                          ...prevState,
                          { ...item, key: UNIQUE__KEY__MAKER(item) },
                        ];
                      });
                      setinnerButtonText("با موفقیت به سبد خرید افزوده شد");
                    }}
                    onMouseLeave={() => {
                      setinnerButtonText("افزودن به سبد خرید");
                    }}
                  >
                    {innerButtonText}
                  </button>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default WomenSuggest;
