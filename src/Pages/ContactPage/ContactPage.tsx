import style from "./ContactPage.module.scss";
import ContactInfo from "../../Layouts/ContactInfo/ContactInfo";

const ContactPage = () => {
  return (
    <div className={style.container}>
      <h1>Informacje kontaktowe</h1>
      <p>
        Niestety na chwilę obecną nie dysponujemy biurem stacjonarnym, ale
        zachęcamy do kontaktu poprzez inne kanały komunikacji :)
      </p>
      <ContactInfo />
    </div>
  );
};

export default ContactPage;
