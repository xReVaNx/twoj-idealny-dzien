import style from "./OfferPage.module.scss";
import { EventCategory } from "../../Data/data";
import { SwiperSlide } from "swiper/react";
import OfferSwiper from "../../Components/OfferSwiper/OfferSwiper";

import Offer from "../../Components/Offer/Offer";

const OfferPage = () => {
  return (
    <div className={style.container}>
      <OfferSwiper>
        {EventCategory.map((item) => {
          return (
            <SwiperSlide key={item.key}>
              <Offer key={item.key} name={item.name} link={item.key} />
            </SwiperSlide>
          );
        })}
      </OfferSwiper>
    </div>
  );
};

export default OfferPage;
