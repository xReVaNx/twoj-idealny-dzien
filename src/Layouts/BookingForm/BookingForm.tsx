import style from "./BookingForm.module.scss";

import {
  FormInput,
  FormSelect,
  FormRadio,
  FormCheckbox,
} from "../../Components/FormInputs/FormInputs";

const BookingForm = () => {
  return (
    <div className={style.container}>
      <FormInput label="Imię i nazwisko" />
      <FormInput label="Imię i nazwisko os. 2" />
      <FormInput label="E-mail" />
      <FormInput label="Miasto" />
      <FormInput overlabel="Data randki" type="date" />
      <FormInput label="Wiadomość opcjonalna" />
      <FormSelect />
      <FormRadio label="Czy masz jakieś alergie?" />
      <FormRadio label="Czy masz ulubione jakieś owoce?" />
      <FormRadio label="Czy masz ulubione jakieś kwiaty?" />
      <FormRadio label="Czy masz jakieś ulubione wino?" />
      <FormCheckbox label="Dodatkowe opcje" />
    </div>
  );
};

export default BookingForm;
