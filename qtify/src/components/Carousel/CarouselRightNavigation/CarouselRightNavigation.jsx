import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import RightArrow from "../../../assets/RightArrow.svg?react";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  // useEffect(() => {
  //   swiper.on("slideChange", function () {
  //     setIsEnd(swiper.isEnd);
  //   });
  // }, []);

  swiper.on("slideChange", function () {
    setIsEnd(swiper.isEnd);
  });

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}
