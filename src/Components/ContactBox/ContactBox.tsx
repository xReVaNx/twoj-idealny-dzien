import style from "./ContactBox.module.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquareAlt,
  FaEnvelopeSquare,
} from "react-icons/fa";
import { ReactElement } from "react";

const ContactBox = (props: any) => {
  var icon: ReactElement;

  switch (props.icon) {
    case "facebook":
      icon = <FaFacebookSquare />;
      break;
    case "instagram":
      icon = <FaInstagramSquare />;
      break;
    case "phone":
      icon = <FaPhoneSquareAlt />;
      break;
    case "email":
      icon = <FaEnvelopeSquare />;
      break;
    default:
      icon = <></>;
      break;
  }

  return <div className={style.container}>{icon}</div>;
};

export default ContactBox;
