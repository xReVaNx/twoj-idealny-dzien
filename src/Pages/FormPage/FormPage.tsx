import style from "./FormPage.module.scss";

import BookingForm from "../../Layouts/BookingForm/BookingForm";

const FormPage = () => {
  return (
    <div className={style.container}>
      <BookingForm />
    </div>
  );
};

export default FormPage;
