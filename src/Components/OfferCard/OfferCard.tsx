import style from "./OfferCard.module.scss";

import { EventCategory } from "../../Data/data";

const OfferCard = (props: any) => {
  const Category = EventCategory.find((x) => x.key === props.id);
  const imageUrl = Category.imgUrl;

  return (
    <div className={style.container}>
      <div id={props.id} className={style.card}>
        <div
          className={style.cardFront}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          {/* <img src={`url(${imageUrl})`} /> */}
        </div>
        <div className={style.cardBack}>
          <div className={style.details}>
            {Category.details
              ? Category.details?.map((item: any) => {
                  return (
                    <div key={item} className={style.detail}>
                      {item}
                    </div>
                  );
                })
              : "Szczegóły jeszcze nie ozdobione :("}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
