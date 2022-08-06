//React
import React from "react";
import { Link } from "react-router-dom";
import HelperLine from "../HelperLine/HelperLine";
//React
//Images
import {
  E__namad,
  LOGO,
  t1,
  t2,
  t3,
  t4,
  t5,
} from "../Image__ComponentExporter/Images";
//Images
//CSS
import styles from "./Footer.module.css";
//CSS
//Modules
//Modules
//Components
//Components
//Contexts
//Contexts
//Refs
//Refs
//States
//States
//Methods
//Methods

const Footer = () => {
  const FooterTrustData = [
    {
      id: "ftd1",
      content: "اصالت کالا",
      image: t1,
    },
    {
      id: "ftd2",
      content: "7 روز ضمانت بازگشت وجه",
      image: t2,
    },
    {
      id: "ftd3",
      content: "پرداخت در محل",
      image: t3,
    },
    {
      id: "ftd4",
      content: "پشتیبانی 24 ساعته",
      image: t4,
    },
    {
      id: "ftd5",
      content: "تحویل اکسپرس",
      image: t5,
    },
  ];
  return (
    <div className={styles.footerContainer}>
      <div className={styles.top}>
        {FooterTrustData.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt="ax" />
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.bottom}>
        <div className={styles.E_Namad}>
          <HelperLine inLineText="ای نماد" />
          <img src={E__namad} alt="e__namad" />
          <p>این نماد هیچ ارزشی ندارد</p>
        </div>
        <div className={styles.myShop}>
          <HelperLine inLineText="بیوتی شاپ " />
          <Link to="/">فرصت های شغلی</Link>
          <Link to="/">انتقادات و پیشنهادات</Link>
          <Link to="/">ما در رسانه ها</Link>
          <Link to="/">تماس با ما</Link>
          <Link to="/">ضمانت ها</Link>
        </div>
        <div className={styles.customers}>
          <HelperLine inLineText="خدمات مشتریان " />
          <Link to="/">پرسش های متداول</Link>
          <Link to="/">راهنمای خرید</Link>
          <Link to="/">شیوه ارسال</Link>
          <Link to="/">راهنمای اندازه ها</Link>
          <Link to="/">بازگشت کالا</Link>
        </div>
        <div className={styles.contents}>
          <HelperLine inLineText="بیوتی شاپ " />
          <img src={LOGO} alt="" />
          <Link to="/">TEST</Link>
          <Link to="/">TEST</Link>
          <Link to="/">TEST</Link>
          <Link to="/">TEST</Link>
          <Link to="/">TEST</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
