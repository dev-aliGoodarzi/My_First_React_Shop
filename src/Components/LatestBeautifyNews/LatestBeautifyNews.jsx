//React
import React from "react";
import { Link } from "react-router-dom";
import HelperLine from "../HelperLine/HelperLine";
//React
//Images
import { lb1, lb2, lb3, lb4 } from "../Image__ComponentExporter/Images";
//Images
//CSS
import styles from "./LatestBeautifyNews.module.css";
//CSS
//Modules
//Modules
//Contexts
//Contexts
//Refs
//Refs

const LatestBeautifyNews = () => {
  const contents = [
    {
      id: "lbn1",
      content: "تاثیر دیابت بر سلامت پوست و ریزش مو",
      routeToNavigae: "/test",
      image: lb1,
    },
    {
      id: "lbn2",
      content: "تاثیر آلودگی هوا بر روی پوست و مو",
      routeToNavigae: "/test",
      image: lb2,
    },
    {
      id: "lbn3",
      content: "پیشگیری و درمان خشکی پوست دور چشم",
      routeToNavigae: "/test",
      image: lb3,
    },
    {
      id: "lbn4",
      content: "اشتباهات آرایشی که بر روی سلامت چشم",
      routeToNavigae: "/test",
      image: lb4,
    },
  ];
  return (
    <div className={styles.latestBeautifyNewsContainer}>
      <HelperLine inLineText="آخرین مطالب زیبایی" />
      <div className={styles.itemsContainer}>
        {contents.map((item) => {
          return (
            <Link
              key={item.id}
              className={styles.beautifulItem}
              to={item.routeToNavigae}
            >
              <img src={item.image} alt="" />
              <p> {item.content}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LatestBeautifyNews;
