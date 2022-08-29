import style from "./BookOffer.module.scss";

import { Link } from "react-router-dom";

const BookOffer = (props: any) => {
  return (
    <Link to="/rezerwacja/zgloszenie">
      <div className={style.container}>{props.name}</div>
    </Link>
  );
};

export default BookOffer;
