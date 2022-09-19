import style from "./ContactInfo.module.scss";
import ContactBox from "../../Components/ContactBox/ContactBox";

const ContactInfo = () => {
  return (
    <div className={style.container}>
      <ContactBox icon="facebook" />
      <ContactBox icon="instagram" />
      <ContactBox icon="phone" />
      <ContactBox icon="email" />
    </div>
  );
};

export default ContactInfo;
