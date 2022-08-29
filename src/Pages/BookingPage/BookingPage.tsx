import style from "./BookingPage.module.scss";

import { EventCategory } from "../../Data/data";

import BookOffer from "../../Components/BookOffer/BookOffer";

const BookingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.BookOfferBox}>
        {EventCategory.map((item) => {
          return <BookOffer name={item.name} key={item.key} />;
        })}
      </div>
    </div>
  );
};

export default BookingPage;
