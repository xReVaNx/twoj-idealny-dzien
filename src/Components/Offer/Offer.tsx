import style from "./Offer.module.scss";
import cardStyle from "../OfferCard/OfferCard.module.scss";
import { Button } from "@nextui-org/react";
import OfferCard from "../OfferCard/OfferCard";
import { useNavigate } from "react-router-dom";

import { EventCategory } from "../../Data/data";

const Offer = (props: any) => {
  const Category = EventCategory.find((x) => x.name === props.name);
  const imageUrl = Category.imgUrl;

  let navigate = useNavigate();

  // const handleClick = (event: any, link: any) => {
  //   navigate(`/oferta/${link}`);
  // };

  const handleClick = () => {
    const el = document.getElementById(Category.key);
    el?.classList.toggle(cardStyle.flip);
  };

  return (
    <div className={style.container}>
      <OfferCard id={Category.key} />
      <div className={style.description}>
        <h1>{props.name}</h1>
        <p>{Category.description}</p>
        <Button
          id="linkButton"
          color="error"
          shadow
          size="lg"
          onPress={handleClick}
        >
          Sprawdź szczegóły
        </Button>
      </div>
    </div>
  );
};

export default Offer;
