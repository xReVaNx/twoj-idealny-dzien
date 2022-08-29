import { Swiper } from "swiper/react";
import style from "./OfferSwiper.module.scss";
import { Navigation, Pagination, EffectCube, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import "swiper/scss/effect-cube";

const OfferSwiper = (props: any) => {
  return (
    <Swiper
      className={style.swiper}
      modules={[Navigation, EffectCube, Autoplay]}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 2500,
      }}
      // loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination
    >
      {props.children}
    </Swiper>
  );
};

export default OfferSwiper;
